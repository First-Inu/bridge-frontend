<template>
  <div class="py-5 px-6 mx-1 text-blue-600 bg-blue-100 rounded border-l-4 border-blue-700">
    <div>
      {{ title }}
    </div>
    <br>
    <br>
    <div>
      {{ description }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Message',
  props: {
    title: {
      type: String,
      default: 'You are about to send tokens to the bridge to be converted from Ethereum Mainnet to Binance Smart Chain. After the tokens have been sent, switch to Binance Smart Chain on your wallet. You will then be able to claim your converted tokens.'
    },
    description : {
      type: String,
      default: 'If you are using Trust Wallet, make sure to use the latest version to avoid issues on using this bridge.'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button:hover {
  box-shadow: 4px 4px 0 #a34ffe;
}
</style>
