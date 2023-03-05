<template>
  <div class="top-element full-screen-image"
       style="background-image: url('src/assets/projects/fwb/Renderning1.png')">
  </div>
  <div class="half">
    <div>
      <span class="giant">
        {{ $t("fwb.giant") }}
      </span>
    </div>
    <div>
      <span class="title">
        {{ $t("fwb.title") }}
      </span>
      <p v-html="$t('fwb.projectDescription')">
      </p>
    </div>
  </div>
  <div class="hero-block">
    <div v-html="$t('fwb.heroBlockDescriptionOne')">
  </div>
  </div>
  <img class="image-block" src="src/assets/projects/fwb/lageplan-klein1.png"/>
  <div class="hero-block">
    <div>
      {{ $t("fwb.heroBlockOne") }}
    </div>
  </div>
  <img class="image-block" src="src/assets/projects/fwb/Fassade-neu-Kopie.png"/>
  <div class="hero-block">
    <div v-html="$t('fwb.heroBlockDescriptionTwo')">
    </div>
  </div>
  <img class="image-block" src="src/assets/projects/fwb/fassade-final-2-Kopie.png"/>
</template>

<script>
export default {
  name: "project-fwb-view"
}
</script>

<style lang="sass" scoped>
.hero-block
  background-color: #c20e1b

  div
    color: #ffffff

.threely
  font-size: 0
  width: 100%
  max-width: 1000px
  margin: 40px auto

  div
    display: inline-block
    vertical-align: middle
    font-size: 60px
    text-align: center

    img
      width: 100%

    span
      font-size: 16px
      text-align: left
      display: block

  div:nth-child(odd)
    width: calc(33.3% - 40px)

  div:nth-child(even)
    width: 40px

</style>