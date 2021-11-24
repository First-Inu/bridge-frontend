import { createStore } from 'vuex'
import state from "./state"
// import web3ModalStore from "./web3ModalStore"

const store = createStore({
  modules: {
    state,
    // web3ModalStore
  }
})

export default store;
