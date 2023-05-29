<template>
  <div>
    <navBar v-if="!$route.meta.hideNavbar"></navBar>
  <router-view></router-view>
  </div>
</template>


<script>
import navBar from './components/pages/navBar.vue'

export default {
  name: 'App',
  components: {
    navBar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>