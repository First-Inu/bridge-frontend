<template>
  <navbar></navbar>
  <router-view/>
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
