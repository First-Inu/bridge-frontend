<template>
  <div  class="m-auto">
    <div class="flex-none lg:flex justify-center">
      <swap></swap>
      <img class="lg:max-w-md lg:ml-4 xl:max-w-xl 2xl:max-w-3xl" src="@/assets/images/bridge.svg">
    </div>
  </div>
</template>

<script>
import Swap from '../components/section/Swap.vue'
// @ is an alias to /src
// import Header from "@/components/Header";

export default {
  name: 'Home',
  components: {
    Swap
    // Header
  },

}
</script>
