import Wallet from './wallet'
// import DAO from './dao'
import EthereumClient from '../data/network/web3/ethereum/ethereumClient'

const ethereumClient = new EthereumClient()

class ServiceProvider {
  /**
   * Creates wallet service.
   * @returns {Wallet} Wallet service
   */
   static wallet() {
    return new Wallet(
      ethereumClient
    )
  }

  /**
   * Creates DAO service
   */
  // static dao() {
  //   return new DAO(
  //     ethereumClient
  //   )
  // }
}

export default ServiceProvider
