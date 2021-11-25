<template>
  <div
    class="
      justify-center
      items-center
      flex
      overflow-x-hidden overflow-y-auto
      fixed
      inset-0
      z-50
      outline-none
      focus:outline-none
      text-left
    "
  >
    <div
      class="fixed inset-0 transition-opacity"
      aria-hidden="true"
      @click="hideModal()"
    >
      <div class="absolute inset-0 bg-gray-500 opacity-75 flex justify-end">
        <div>
          <button
            type="button"
            class="
              text-gray-400
              bg-transparent
              hover:bg-gray-200 hover:text-gray-900
              rounded-lg
              text-sm
              p-1.5
              flex
              items-center
            "
            data-modal-toggle="default-modal"
          >
            <svg
              class="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
    <div
      class="
        relative
        rounded-lg
        shadow-lg
        overflow-auto
        bg-white
        z-30
        mx-4
        sm:mx-auto
        Modal-Size
      "
    >
      <div
        class="
          text-yellow-500
          font-semibold
          text-xl text-left
          px-8
          py-4
          bg-gray-100
        "
      >
        Claim your $FINU
      </div>
      <div class="px-8 text-black text-lg font-semibold">
        <div class="py-10">
          After you initiate a conversion and send tokens on one side of the
          bridge, come here to claim your tokens on the receiving side. To claim
          your tokens, all you have to do is switch to the target network on
          your wallet.
          <br />
          <br />
          Once you have claimed your $FLOKI, please check the Etherscan and wait
          a few minutes for your claimed tokens to arrive in your wallet.
        </div>
        <hr />
        <div class="pt-10">
          <div>Swap ID</div>
          <input
            type="text"
            placeholder="Swap ID"
            class="bg-white border-2 rounded px-3 py-1 my-4 w-full"
          />
        </div>
        <div class="pt-2">
          <div>Unique Identifier</div>
          <input
            type="text"
            placeholder="Unique Identifier"
            class="bg-white border-2 rounded px-3 py-1 my-4 w-full"
          />
        </div>
        <div class="pt-2">
          <div>Swapped Amount</div>
          <input
            type="number"
            placeholder="Swapped Amount"
            class="bg-white border-2 rounded px-3 py-1 my-4 w-full"
          />
        </div>
        <div
          class="
            bg-yellow-100
            border-l-4 border-yellow-300
            rounded
            p-6
            bg-opacity-50
          "
        >
          A 0.002 ETH gas fee is required to execute the token claim.
        </div>
      </div>
      <hr class="my-10" />
      <div class="flex justify-end px-6 pb-4">
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
          @click="modalShowed = true"
        >
          Clain Now
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ClaimModal",
  props: {
    msg: String,
  },
  methods: {
    hideModal() {
      this.$emit("hideModal");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
card-shadow {
  box-shadow: 25px 22px 0 #ffedd1;
}
button:hover {
  box-shadow: 4px 4px 0 #a34ffe;
}
button:focus {
  outline: 0px auto -webkit-focus-ring-color;
}
.Modal-Size {
  max-width: 700px;
  max-height: 900px;
}
</style>
