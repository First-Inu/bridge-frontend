import WalletState from '../../models/walletState'

/**
 * Wallet service
 * @property {EthereumClient} client Ethereum client
 */
 class Wallet {
  constructor(
    ethereumClient
  ) {
    this.client = ethereumClient
  }

  async getState() {
    let walletState = await this.client.syncWallet()
    let values = []
    if (!walletState)
      return new WalletState(null, 0)
    // if (localStorage.address) {
    //   const address = JSON.parse(localStorage.address);
    //   values.push(address.value1)
    //   values.push(address.value2)
    // } else {
      values = await Promise.all([
        (await this.client.getWalletAddress()).toLowerCase(),
        this.client.getWalletEthBalance()
      ])
    // }
    const state = new WalletState(
      values[0],
      values[1] / Math.pow(10, 18)
    )
    // localStorage.address = JSON.stringify({ value1: values[0], value2: values[1] });
    return state
  }

  async disconnectWallet() {
    await this.client.nonsyncWallet();
    const state = new WalletState(null, 0)
    return state
  }
}

export default Wallet
