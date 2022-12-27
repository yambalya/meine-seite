<template>
  <div class="wrapper">
    <project-thumbnail
        title="IKuH"
        subtitle="Initiative Kultur Haus Bad Wilsnack"
        base-image="src/assets/Pikto-Projekt-01.png"
        hover-image="src/assets/Projekt-01-perspektive.jpg"
        position="center"
        background-color="#64769c17"
        project-name="iku"
    />
    <project-thumbnail
        title="HdKB"
        subtitle="Haus der Künste Berlin"
        base-image="src/assets/Pikto-Projekt-02.png"
        hover-image="src/assets/Projekt-02-perspektive.jpg"
        position="right"
        background-color="#60a97417"
    />
    <project-thumbnail
        title="FWB"
        subtitle="Fassaden Wettbewerb Hubertusalle Berlin"
        base-image="src/assets/Pikto-Projekt-03.png"
        hover-image="src/assets/Projekt-03-perspektive.jpg"
        position="center"
        background-color="#8a1c0c17"
    />
    <project-thumbnail
        title="Sweets"
        subtitle="Ehemalige Schokoladenfabrik Greußen"
        base-image="src/assets/Pikto-Projekt-04.png"
        hover-image="src/assets/Projekt-04-perspektive.jpg"
        position="left"
        background-color="#CD9D2D17"
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