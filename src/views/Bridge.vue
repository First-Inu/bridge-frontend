<template>
  <div  class="container m-auto">
    <div class="flex justify-center">
      <swap></swap>
      <img class="hidden lg:block lg:max-w-md xl:max-w-xl 2xl:max-w-3xl" src="@/assets/images/bridge.svg">
    </div>
  </div>
</template>

<script>
import Swap from '../components/section/Swap.vue'
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
    Swap
  }
}
</script>
