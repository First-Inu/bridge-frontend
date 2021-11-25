require('dotenv').config()
const { ethers } = require("ethers")
import Web3Modal from "web3modal"
import WalletConnectProvider from "@walletconnect/web3-provider"
import contractAbi from "./abi/Asset.json"

const contractAddress = "0xA076c6bB4b1c5dED48488CAeB5b1799DE8dEFaD7"
const tokenAddress = "0xe820eC01a88752d4b751327ceadD1cE9ACa32697"

/**
 * @property {ethers.JsonRpcSigner} walletProvider
 * @property {ethers.JsonRpcSigner} walletSigner
 * @property {Web3Modal} web3Modal
 * @property {FinuContract} fContract
 * @property {FinuContract} tokenContract
 * @property provider
 */
class EthereumClient {
  constructor() {
    const providerOptions = {
      walletconnect: {
        package: WalletConnectProvider,
        options: {
          infuraId: "8043bb2cf99347b1bfadfb233c5325c0"
        }
      }
    }
    this.web3Modal = new Web3Modal({
      cacheProvider: false,
      providerOptions
    })
  }

  /* --- Blockchain state --- */

  /**
   * Get current block number.
   */
  async getBlockNumber() {
    const number = await this.readProvider.getBlockNumber()
    console.log(number)
  }

  /* --- Wallet access --- */

  async syncWallet(forceConnect=false) {
    if (this.walletProvider != null && this.walletSigner != null) {
      if (forceConnect) {
        this.walletProvider = new ethers.providers.Web3Provider(this.provider)
        this.walletSigner = this.walletProvider.getSigner()
      }
      return this.provider
    }
    // Using in-browser wallet to access wallet state and sign transactions
    if (window.ethereum) {
      try {
        this.provider = await this.web3Modal.connect()
        // await window.ethereum.request({ method: 'eth_requestAccounts' });
      } catch(error) {
        console.log(error)
        return
      }
    }
    this.walletProvider = new ethers.providers.Web3Provider(this.provider)

    this.walletSigner = this.walletProvider.getSigner()

    const abi = [
      {
        "constant": false,
        "inputs": [
          {
            "name": "_spender",
            "type": "address"
          },
          {
            "name": "_value",
            "type": "uint256"
          }
        ],
        "name": "approve",
        "outputs": [
          {
            "name": "",
            "type": "bool"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant":true,
        "inputs":[{"name":"_owner","type":"address"}],
        "name":"balanceOf",
        "outputs":[{"name":"balance","type":"uint256"}],
        "type":"function"
      }
    ];
    this.fContract = new ethers.Contract(contractAddress, abi, this.walletSigner);
    this.tokenContract = this.getContract(tokenAddress, contractAbi)

    return this.provider
  }

  async nonsyncWallet() {
    // await this.provider.close()
    await this.web3Modal.clearCachedProvider();
    this.walletProvider = null
    this.walletSigner = null
    this.provider = null
  }

  async approve(amount) {
    console.log(this.fContract)
    if (this.fContract) {
      const result = await this.fContract.approve('0xe820eC01a88752d4b751327ceadD1cE9ACa32697', amount)
      console.log(result, '--------')
      return true
    } else
      return false
  }

  async sendTokens(amount) {
    try {
      await this.fContract.approve(tokenAddress, amount)
      await this.tokenContract.lockToken(amount)
    } catch(error) {
      console.log(error)
      return
    }
  }

  async getWalletAddress() {
    return this.walletSigner ? this.walletSigner.getAddress() : null
  }

  async getWalletEthBalance() {
    if (this.fContract) {
      const balance = await this.fContract.balanceOf(this.walletSigner.getAddress())
      return Math.floor(ethers.utils.formatUnits(balance, 9))
    } else
      return 0
    // return (await this.walletSigner.getBalance()).toString()
  }

  /* --- Contract access --- */

  /**
   * Initialize contract.
   * @param {string} address Contract address
   * @param {string} abi Contract ABI
   * @returns Read-only contract instance
   */
  getContract(address, abi) {
    return new ethers.Contract(address, abi, this.walletSigner)
  }

  /**
   * Get a copy of the contract where signable transactions can be executed.
   * @param {ethers.Contract} contract Contract
   * @returns {ethers.Contract} Contract instance with signer (wallet) connected to it
   */
  getMutableContract(contract) {
    return contract.connect(this.walletSigner)
  }
}

export default EthereumClient
