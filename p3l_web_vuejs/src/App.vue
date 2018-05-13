<template>
  <div id="app">
    <app-toolbar></app-toolbar>
      <router-view/>
      <br>
    <app-footer style="position: absolute;z-index:-1"></app-footer>
  </div>
</template>

<script>
// import AppFooter from './components/AppFooter'
import AppToolbar from './components/AppToolbar'
import AppFooter from './components/AppFooter'
export default {
  name: 'App',
  components: {AppToolbar, AppFooter}
}
</script>

<style>
#app {
  font-family: "MuseoSans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #ffffff!important;
  color: #434343
}
  a:link {
    text-decoration: none;
}
</style>
