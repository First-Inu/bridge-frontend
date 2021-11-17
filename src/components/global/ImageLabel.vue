<template>
  <div class="flex items-center">
    <img v-if="imageUrl !== ''" :src="require(`${imageUrl}`)"/>
    <div class="pl-2 text-base" :class="textClass">
      {{ description }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'ImageLabel',
  props: {
    imageUrl: {
      type: String,
      default: ''
    },
    textClass: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
