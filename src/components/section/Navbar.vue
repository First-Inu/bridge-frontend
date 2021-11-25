<template>
  <nav class="sticky top-0 flex items-center justify-center bg-white">
    <div class="flex items-cneter justify-between w-full p-2">
      <logo></logo>
      <div class="flex items-cneter m-4">
        <wallet-banance></wallet-banance>
        <div>
          <div v-if="isLoading" class="absolute w-full h-full">
            <clip-loader class="flex justify-center items-center h-full" :loading="isLoading"></clip-loader>
          </div>
          <button
            class="
              text-black
              bg-gradient-to-tr
              from-yellow-200
              to-yellow-500 to-yellow-400
              px-4
              py-2
              rounded
              shadow-md
              m-2
            "
            @click="connetWallet()"
          >
            {{ address ? "Disconnect Wallet" : "Connect Wallet" }}
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import Logo from "../global/Logo.vue";
import WalletBanance from "../global/WalletBanance.vue";
import ClipLoader from "vue-spinner/src/ClipLoader.vue";

import { mapGetters, mapActions } from "vuex";

export default {
  name: "Navbar",
  props: {},
  data() {
    return {
      modalShowed: false,
      isLoading: false,
    };
  },
  components: { Logo, WalletBanance, ClipLoader },
  computed: {
    ...mapGetters({ address: "userWalletAddress", balance: "userEthBalance" }),
  },
  mounted() {
    this.modalShowed = false;
  },
  methods: {
    async connetWallet() {
      if (this.address) {
        this.nonsync();
      } else {
        if (!this.isLoading) {
          this.isLoading = true;
          await this.sync();
          this.isLoading = false;
        }
      }
    },
    ...mapActions({
      nonsync: "nonsyncWallet",
      sync: "syncWallet",
    }),
  },
  watch: {
    address(newValue) {
      if (newValue) this.modalShowed = false;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button:hover {
  box-shadow: 4px 4px 0 #a34ffe;
}
</style>
