<template>
  <div class="wrapper">
    <project-thumbnail
        title="Sweets"
        subtitle="Ehemalige Schokoladenfabrik Greußen"
        base-image="src/assets/Pikto-Projekt-04.png"
        hover-image="src/assets/Projekt-04-perspektive.jpg"
        position="left"
        background-color="#edc15217"
        project-name="sweets"
    />
    <project-thumbnail
        title="FWB"
        :subtitle="$t('ProjectViews.subtitleTwo')"
        base-image="src/assets/Pikto-Projekt-03.png"
        hover-image="src/assets/Projekt-03-perspektive.jpg"
        position="center"
        background-color="#c20e1b17"
        project-name="fwb"
    />
    <project-thumbnail
        title="HdKB"
        :subtitle="$t('ProjectViews.subtitleThree')"
        base-image="src/assets/Pikto-Projekt-02.png"
        hover-image="src/assets/Projekt-02-perspektive.jpg"
        position="right"
        background-color="#6db38717"
        project-name="hdkb"
    />
    <project-thumbnail
        title="IKuH"
        :subtitle="$t('ProjectViews.subtitleFour')"
        base-image="src/assets/Pikto-Projekt-01.png"
        hover-image="src/assets/Projekt-01-perspektive.jpg"
        position="center"
        background-color="#64769c17"
        project-name="iku"
    />
  </div>
</template>

<script>
import ProjectThumbnail from "@/components/project-thumbnail.vue";

export default {
  name: "projects-view",
  components: {ProjectThumbnail}
}
</script>

<style lang="sass" scoped>

.wrapper
  width: calc(100vw - 80px)
  display: block
  position: relative
  margin: 120px 40px

</style>