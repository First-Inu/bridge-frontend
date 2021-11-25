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
    let provider = await this.client.syncWallet()
    let values = []

    if (!provider)
      return {walletState: new WalletState(null, 0), provider: null}
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
      values[1]
    )

    // localStorage.address = JSON.stringify({ value1: values[0], value2: values[1] });
    return {walletState: state, provider: provider}
  }

  async reconnectWallet() {
    let provider = await this.client.syncWallet(true)
    let values = []

    if (!provider)
      return new WalletState(null, 0)

    values = await Promise.all([
      (await this.client.getWalletAddress()).toLowerCase(),
      this.client.getWalletEthBalance()
    ])

    const state = new WalletState(
      values[0],
      values[1]
    )

    return {walletState: state, provider: provider}
  }

  async disconnectWallet() {
    await this.client.nonsyncWallet();
    const state = new WalletState(null, 0)
    return state
  }

  async sendTokens(amount) {
    return await this.client.sendTokens(amount)
  }
}

export default Wallet
