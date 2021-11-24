<template>
  <div
    class="flex flex-col w-full h-full items-center cursor-pointer justify-center rounded-xl p-2 text-center bg-gray-100 hover:bg-gray-200"
    @click="onClick"
  >
    <img class="w-12 h-12" src="@/assets/icons/metamask.png" />
    <div class="text-2xl font-semibold text-center text-black">
      MetaMask
    </div>
    <div class="text-lg text-gray-500">
      Connect to your MetaMask Wallet
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex"

export default {
  name: "ConnectButton",
  props: {
  },
  computed: {
    ...mapGetters({
      address: "userWalletAddress",
    }),
  },
  methods: {
    ...mapActions({
      sync: "syncWallet",
    }),
    onClick() {
      this.sync()
      this.$emit('click')
    },
  },
  mounted() {
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button:hover {
  box-shadow: 0px 0px 0 #a34ffe
}
</style>
