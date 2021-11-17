<template>
  <div class="flex flex-col justify-center text-center px-6">
    <div>
      <h3 class="font-bold text-yellow-400 text-base">BRIDGE</h3>
      <h1
        class="font-bold text-4xl text-gray-600"
        v-text="'ETH <> BSC Bridge'"
      ></h1>
    </div>

    <article class="text-left mt-10">
      <message> </message>
    </article>

    <ethereum-source class="mt-4"></ethereum-source>

    <wallet-state></wallet-state>

    <card class="text-left mt-0 z-20 bg-white">
      <div class="flex items-center">
        <img class="w-3" v-if="imageUrl !== ''" src="@/assets/icons/bnb.svg"/>
        <div class="pl-2 text-base text-yellow-500">
          Binance Smart Chain
        </div>
      </div>
    </card>

    <card class="text-left mt-12 z-20 bg-white mb-32">
      <div class="pl-2 text-base text-purple-700">
        Ethereum Mainnet
      </div>
      <div class="pl-2 text-base text-gray-600">
        $FLOKI Claimable Balance (ERC20)
      </div>
    </card>
  </div>
</template>

<script>
import Message from '../global/Message.vue';
import EthereumSource from './EthereumSource.vue';
import WalletState from './WalletState.vue';
import Card from '@/components/global/Card'

export default {
  components: { Message, EthereumSource, WalletState, Card },
  name: "InputBox",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button:hover {
  box-shadow: 4px 4px 0 #a34ffe;
}
</style>
