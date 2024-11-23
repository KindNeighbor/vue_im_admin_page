<!-- src/App.vue -->
<template>
  <div class="app">
    <NavBar/>
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from './components/layout/NavBar.vue'

export default {
  name: 'App',
  components: {
    NavBar
  }
}
</script>

<style>
.app {
  height: 100vh;
}
</style>