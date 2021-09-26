<template>
  <div id="app">
    <WdevHeader />

    <router-view path="$router.key"></router-view>

    <WdevFooter/>
  </div>
</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'
import WdevHeader from './components/header/WdevHeader'
import WdevFooter from'./components/footer/WdevFooter'
import './assets/css/global.css'

@Component({
  components: {
    WdevHeader,
    WdevFooter
  }
})
export default class App extends Vue {}
</script>

<style>

</style>
