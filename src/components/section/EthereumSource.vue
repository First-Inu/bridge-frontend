<template>
  <card class="text-left">
    <div class="flex items-center">
      <img class="w-3" src="@/assets/icons/eth.svg" />
      <div class="pl-2 text-base text-purple-700">Ethereum Mainnet</div>
    </div>
    <div>
      <h3 class="my-6 text-left font-bold text-gray-800">Amount</h3>
      <input
        type="number"
        v-model="amount_swap"
        class="
          w-full
          text-yellow-500 text-xl
          px-6
          py-4
          bg-gray-100
          rounded
          hover:border-0
          disabled:opacity-75
        "
        :disabled="isBalance()"
      />
    </div>
    <div>
      <div class="mt-5 mb-2 text-yellow-500 text-2xl">
        {{ "You will send: " + amount_swap + " $FINU" }}
      </div>
      <div>
        $FINU Current Balance (ERC20):
        <span class="text-yellow-500"></span>
      </div>
    </div>
    <div class="flex flex-col items-center">
      <button
        class="
          mt-14
          w-full
          rounded
          px-4
          py-4
          font-bold
          text-xl text-white
          focus:outline-none
        "
        :disabled="isBalance()"
        :title="amount_swap ? 'Tansfer token' : 'please input amount'"
        :class="amount_swap ? 'bg-gradient-to-tr from-purple-500 to-purple-700 button-hover' : 'cursor-not-allowed bg-gray-300 hover:shadow-none'"
        @click="sendToken()"
      >
        Send Tokens
      </button>
      <a
        class="hover:text-yellow-500 text-gray-300 pt-6"
        target="_blank"
        href="https://app.moontography.com/"
      >
        Powered by Moontography
      </a>
    </div>
  </card>
</template>

<script>
import Card from "../global/Card.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  components: { Card },
  name: "EthereumSource",
  props: {
    msg: String,
  },
  computed: {
    ...mapGetters({
      balance: "userEthBalance",
    }),
  },
  watch: {
    amount_swap(newValue) {
      if (newValue < 0) this.amount_swap = 0;
      if (newValue > this.balance) this.amount_swap = this.balance;
    },
  },
  data() {
    return { amount_swap: 0 };
  },
  methods: {
    isBalance() {
      return !this.balance || this.balance == 0;
    },
    async sendToken() {
      let state = await this.sendTokens(this.amount_swap)
      console.log(state);
    },
    ...mapActions(['sendTokens'])
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.button-hover:hover {
  box-shadow: 4px 4px 0 #ffea51;
}
</style>
