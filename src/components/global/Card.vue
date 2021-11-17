<template>
  <div class="p-5 rounded-lg border-2 m-1 mb-6" style="box-shadow: 30px 30px 0 #ffedd1;">
    <slot> body </slot>
  </div>
</template>

<script>
export default {
  name: 'InputBox',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
card-shadow {
  box-shadow: 25px 22px 0 #ffedd1;
}
</style>
