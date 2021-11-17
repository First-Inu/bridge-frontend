<template>
  <div>
    <div class="flex w-full justify-center">
      <div class="w-1 h-16 Card-Color z-0">
      </div>
    </div>
    <div class="flex w-full justify-center">
      <div class="rounded-3xl Card-Color px-4 py-2 z-10">
        <div v-if="true">
          connect your wallet
        </div>
        <div v-else>
          Swap token
        </div>
      </div>
    </div>
    <div class="flex w-full justify-center">
      <div class="w-1 h-16 Card-Color z-0">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WalletState',
}
</script>
