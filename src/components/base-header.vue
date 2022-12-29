<template>
<nav class="header">
  <div class="burger">
    <button class="hamburger hamburger--squeeze" type="button" @click="burgerClicked" :class="{'is-active': menuActive}">
      <span class="hamburger-box">
        <span class="hamburger-inner"></span>
      </span>
    </button>
  </div>
  <div class="title">
    Wilhelm Franke
  </div>
</nav>
  <nav class="nav-fullscreen" :class="{'is-active': menuActive}">
    <router-link to="/" @click="menuActive=false">
      Lebenslauf
    </router-link>
    <router-link :to="{name: 'projects'}" @click="menuActive=false">
      Projekte
    </router-link>
    <a href="">
      Kontakt
    </a>
  </nav>


</template>

<script>
export default {
  name: 'baseHeader',
  data(){
    return {
      menuActive: false
    }
  },
  methods:{
    burgerClicked(){
      this.menuActive = !this.menuActive
    }
  }
}
</script>

<style scoped>

</style>