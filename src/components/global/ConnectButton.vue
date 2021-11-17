<template>
  <button class="text-black bg-gradient-to-tr from-yellow-200 to-yellow-500 to-yellow-400 px-4 py-2 rounded shadow-md m-2">
    ConnectWallet
  </button>
</template>

<script>
export default {
  name: 'ConnectButton',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button:hover {
  box-shadow: 4px 4px 0 #a34ffe;
}
</style>
