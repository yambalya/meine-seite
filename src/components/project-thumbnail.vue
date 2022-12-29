<template>
  <div :class="position" @click="openProject">
    <div class="image" :style="{ backgroundImage: `url('${baseImage}')`, backgroundColor }">
      <div :style="{ backgroundImage: `url('${hoverImage}')` }"></div>
    </div>
    <span>
      {{ title }}
    </span><br>
    <span class="subtitle">
      {{ subtitle }}
    </span>
  </div>
</template>

<script>
export default {
  name: "project-thumbnail",
  props: {
    title: String,
    subtitle: String,
    baseImage: String,
    hoverImage: String,
    position: String,
    backgroundColor: String,
    projectName: String
  },
  methods: {
    openProject(){
      this.$router.push({name: this.projectName})
    }
  }
}
</script>

<style lang="sass" scoped>
  div
    cursor: pointer

  .image
    width: 100%
    aspect-ratio: 3 / 2
    display: block
    background-position: center center
    background-size: cover
    margin-bottom: 10px

    div
      opacity: 0
      width: 100%
      height: 100%
      background-position: center center
      background-size: cover
      transition: opacity 0.4s

    &:hover
      div
        opacity: 1

  span
    font-size: 34px
    margin-top: 20px
    font-weight: bold

  .center
    margin: 160px auto
    width: 80%
    max-width: 1000px

  .left
    margin: 160px 0
    width: 80%
    max-width: 1000px

  .right
    margin: 160px 0 160px auto
    width: 80%
    max-width: 1000px
    text-align: right

  .subtitle
    font-size: 24px
    opacity: 0.6
    font-weight: normal
</style>