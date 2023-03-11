<script setup>
import project01 from '@/assets/Pikto-Projekt-01.png'
import project01hover from '@/assets/Projekt-01-perspektive.jpg'
import project02 from '@/assets/Pikto-Projekt-02.png'
import project02hover from '@/assets/Projekt-02-perspektive.jpg'
import project03 from '@/assets/Pikto-Projekt-03.png'
import project03hover from '@/assets/Projekt-03-perspektive.jpg'
import project04 from '@/assets/Pikto-Projekt-04.png'
import project04hover from '@/assets/Projekt-04-perspektive.jpg'
</script>
<template>
  <div class="wrapper">
    <project-thumbnail
        title="Sweets"
        :subtitle="$t('ProjectViews.subtitleOne')"
        :base-image="project04"
        :hover-image="project04hover"
        position="left"
        background-color="#edc15217"
        project-name="sweets"
    />
    <project-thumbnail
        title="FWB"
        :subtitle="$t('ProjectViews.subtitleTwo')"
        :base-image="project03"
        :hover-image="project03hover"
        position="center"
        background-color="#c20e1b17"
        project-name="fwb"
    />
    <project-thumbnail
        title="HdKB"
        :subtitle="$t('ProjectViews.subtitleThree')"
        :base-image="project02"
        :hover-image="project02hover"
        position="right"
        background-color="#6db38717"
        project-name="hdkb"
    />
    <project-thumbnail
        title="IKuH"
        :subtitle="$t('ProjectViews.subtitleFour')"
        :base-image="project01"
        :hover-image="project01hover"
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