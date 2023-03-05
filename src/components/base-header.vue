<template>
<nav class="header">
  <div class="burger">
    <button class="hamburger hamburger--squeeze" type="button" @click="burgerClicked" :class="{'is-active': menuActive}">
      <span class="hamburger-box">
        <span class="hamburger-inner"></span>
      </span>
    </button>
  </div>
  <div class="title" :class="{'is-gone': menuActive}">
    Wilhelm Franke
  </div>
  <div class="translationChooser">
    <span @click="setLanguage('de')" :class="{active:$i18n.locale === 'de'}">DE</span>
    &nbsp;
    <span @click="setLanguage('en')" :class="{active:$i18n.locale === 'en'}">EN</span>
  </div>
</nav>
  <nav class="nav-fullscreen" :class="{'is-active': menuActive}">
    <span class="link-element">
      <router-link :to="{name: 'startPage'}" @click="menuActive=false" v-text="$t('startPage')" />
    </span>
    <span class="link-element">
      <router-link :to="{name: 'projects'}" @click="menuActive=false" v-text="$t('projects')" />
    </span>
    <span class="link-element">
      <router-link :to="{name: 'cv'}" @click="menuActive=false" v-text="$t('curriculumVitae')" />
    </span>
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
    },
    setLanguage(language) {
      this.$i18n.locale = language
    }
  }
}
</script>

<style lang="sass" scoped>
.link-element
  display: block
  margin: 20px 0

a
  width: fit-content
  display: inline-block
  position: relative
  color: black
  text-decoration: none
  font-size: 60px

  &:after
    content: ''
    position: absolute
    width: 100%
    transform: scaleX(0)
    height: 2px
    bottom: 0
    left: 0
    background-color: black
    transform-origin: bottom right
    transition: transform 0.25s ease-out

  &:hover
    &:after
      transform: scaleX(1)
      transform-origin: bottom left
</style>