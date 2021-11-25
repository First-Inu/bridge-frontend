<template>
  <div class="container mx-auto">
    <navbar></navbar>
    <router-view/>
  </div>
</template>

<script>
import Navbar from './components/section/Navbar.vue'

export default {
  components: { Navbar },
  name: 'app'
}
</script>

<style>
</style>
