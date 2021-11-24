require('dotenv').config()
const { ethers } = require("ethers")
import Web3Modal from "web3modal"
import WalletConnectProvider from "@walletconnect/web3-provider"
/**
 * @property {ethers.JsonRpcSigner} walletProvider
 * @property {ethers.JsonRpcSigner} walletSigner
 * @property {Web3Modal} web3Modal
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

  async syncWallet() {
    if (this.walletProvider != null && this.walletSigner != null) { return }
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

    return true
  }

  async nonsyncWallet() {
    // await this.provider.close()
    await this.web3Modal.clearCachedProvider();
    this.walletProvider = null
    this.walletSigner = null
    this.provider = null
  }

  async getWalletAddress() {
    return this.walletSigner ? this.walletSigner.getAddress() : ''
  }

  async getWalletEthBalance() {
    return (await this.walletSigner.getBalance()).toString()
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
