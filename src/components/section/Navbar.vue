<template>
  <nav class="flex items-center justify-center">
    <div class="container flex items-cneter justify-between p-2">
      <logo></logo>
      <div class="flex items-cneter m-4">
        <connect-button></connect-button>
      </div>
    </div>
  </nav>
</template>

<script>
import ConnectButton from '../global/ConnectButton.vue'
import Logo from '../global/Logo.vue'
export default {
  components: { Logo, ConnectButton },
  name: 'Navbar',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
