<template>
  <div v-if="address != null" class="hidden md:flex items-center">
    <div class="flex items-center rounded bg-gray-100 px-3 py-1">
      <img class="w-3" src="@/assets/icons/eth.svg"/>
      <div class="pl-2 text-base text-yellow-500">
        {{ balance + ' $FINU' }}
      </div>
    </div>
    <div class="flex items-center rounded bg-gray-100 ml-6">
      <div class="bg-green-400 px-3 py-1 rounded-l">
        Connected
      </div>
      <div class="pl-2 text-base text-yellow-500 pr-3">
        {{ address.substring(0, 6) + '...' + address.substring(address.length - 4) }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "WalletBalance",
  props: {},
  computed: {
    ...mapGetters({ address: "userWalletAddress", balance: "userEthBalance" }),
  },
  watch: {
    balance(newValue) {
      console.log(newValue)
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button:hover {
  box-shadow: 4px 4px 0 #a34ffe;
}
</style>
