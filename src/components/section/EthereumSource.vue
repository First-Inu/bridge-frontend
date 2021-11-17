<template>
  <card class="text-left">
    <div class="flex items-center">
      <img class="w-3" v-if="imageUrl !== ''" src="@/assets/icons/eth.svg"/>
      <div class="pl-2 text-base text-purple-700">
        Ethereum Mainnet
      </div>
    </div>
    <div>
      <h3 class="my-6 text-left font-bold text-gray-800">
        Amount
      </h3>
      <input type="number" class="w-full text-yellow-500 text-xl px-6 py-4 bg-gray-100 rounded hover:border-0"/>
    </div>
    <div>
      <div class="mt-5 mb-2 text-yellow-500 text-2xl">
        You will send: 0 $FLOKI
      </div>
      <div>
        $FLOKI Current Balance (ERC20):
      </div>
    </div>
    <button class="mt-14 w-full bg-gray-400 rounded px-4 py-4">
      Send Tokens
    </button>
  </card>
</template>

<script>
import Card from "../global/Card.vue"

export default {
  components: { Card },
  name: 'EthereumSource',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
