<template>
  <div class="hero top-element">
    <div>
      <div class="left">
        <span style="font-size: 80px"> {{ $t("mainsite") }} </span>
        <span style="font-weight: normal; font-size: 22px"> {{ $t("CV.mainsite") }} </span>
      </div>
      <img src="src/assets/meiner.jpeg">
    </div>
  </div>
  <div class="main-content">
    <div class="link-wrapper">
      <span>
        <router-link :to="{name: 'projects'}" v-text=" $t('projects')" class="hover-underline-animation"/>
      </span>
      <span style="text-align: right">
        <router-link :to="{name: 'cv'}" v-text="$t('curriculumVitae')" class="hover-underline-animation"/>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "main-page.vu"
}
</script>
<style lang="sass" scoped>
.top-element
    height: 450px

.left
  display: inline-block
  width: 50%
  vertical-align: top
  margin-top: 100px

  span
    color: white
    font-weight: bold
    display: block
    margin-top: 20px
    text-align: right

img
  display: inline-block
  width: calc(40% - 40px)
  margin-left: 40px
  margin-top: 110px
  vertical-align: top
  filter: grayscale(100%)

.heading
  font-size: 42px
  text-transform: uppercase
  margin-left: 10px
  margin-top: 100px
  margin-bottom: 20px

.main-content
  margin-top: 150px
  width: 730px

.link-wrapper
  display: block
  position: relative
  font-size: 0
  vertical-align: top

  span
    display: inline-block
    width: 50%

.hover-underline-animation
  display: inline-block
  position: relative
  color: black
  text-decoration: none
  font-size: 60px

.hover-underline-animation::after
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


.hover-underline-animation:hover::after
  transform: scaleX(1)
  transform-origin: bottom left


</style>