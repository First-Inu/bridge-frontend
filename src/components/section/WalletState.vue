<template>
  <div>
    <div class="flex w-full justify-center">
      <div class="w-1 h-16 Card-Color">
      </div>
    </div>
    <div class="flex w-full justify-center">
      <div class="rounded-3xl Card-Color px-4 py-2">
        <div v-if="true">
          {{ address ? 'Transfer To' : 'connect your wallet' }}
        </div>
        <div v-else>
          Swap token
        </div>
      </div>
    </div>
    <div class="flex w-full justify-center">
      <div class="w-1 h-16 Card-Color">
      </div>
    </div>
  </div>
</template>

<script>

import { mapGetters } from "vuex"

export default {
  name: 'WalletState',
  computed: {
    ...mapGetters({ address: 'userWalletAddress' })
  }
}
</script>
