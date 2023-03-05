<template>
  <div class="top-element full-screen-image">
  </div>
  <div class="half">
    <div>
      <span class="giant">
        {{ $t("sweets.giant") }}
      </span>
    </div>
    <div>
      <span class="title">
        <p v-html="$t('sweets.projectTitle')">
        </p>
      </span>
      <p v-html="$t('sweets.projectDescription')">
      </p>
    </div>
  </div>
  <div class="hero-block">
    <div>
      {{ $t("sweets.heroBlockOne") }}
    </div>
  </div>
  <img class="image-block" src="/src/assets/projects/sweets/Pikto-Szenarien-.png"/>
  <div class="hero-block">
    <div>
      {{ $t("sweets.heroBlockTwo") }}
    </div>
  </div>
  <div class="threely">
    <div>
      <img src="/src/assets/projects/sweets/Projekt-03-Pikto-01.png">
      <span>
        {{ $t("sweets.threelyCaption.1") }}
      </span>
    </div>
    <div>
      <img src="/src/assets/projects/sweets/Projekt-03-Pikto-02.png">
      <span>
        {{ $t("sweets.threelyCaption.2") }}
      </span>
    </div>
    <div>
      <img src="/src/assets/projects/sweets/Projekt-03-Pikto-03.png">
      <span>
        {{ $t("sweets.threelyCaption.3") }}
      </span>
    </div>
  </div>
  <div class="threely">
    <div>
      <img src="/src/assets/projects/sweets/Projekt-03-Pikto-04.png">
      <span>
        {{ $t("sweets.threelyCaption.4") }}
      </span>
    </div>
    <div>
      <img src="/src/assets/projects/sweets/Projekt-03-Pikto-05.png">
      <span>
        {{ $t("sweets.threelyCaption.5") }}
      </span>
    </div>
    <div>
      <img src="/src/assets/projects/sweets/Projekt-03-Pikto-06.png">
      <span>
        {{ $t("sweets.threelyCaption.6") }}
      </span>
    </div>
  </div>
  <div class="hero-block">
    <div>
      {{ $t("sweets.heroBlockThree") }}
    </div>
  </div>
  <img class="image-block" src="/src/assets/projects/sweets/Lageplan-Final.png"/>
  <div class="hero-block">
    <div>
      {{ $t("sweets.heroBlockFour") }}
    </div>
  </div>
  <div class="full-screen-image"
       style="background-image: url('/src/assets/projects/sweets/Axometrie.png'); margin-top: 0">
  </div>
  <div class="hero-block">
    <div>
      {{ $t("sweets.heroBlockFive") }}
    </div>
  </div>
  <div class="main-content">
    <Splide :options="{start: 0}">
      <SplideSlide>
        <img src="/src/assets/projects/sweets/Grundriss-01.png" class="splide-slide-image"
             @click="firstSlider.showImage=0">
      </SplideSlide>
      <SplideSlide>
        <img src="/src/assets/projects/sweets/Grundriss-02.png" class="splide-slide-image"
             @click="firstSlider.showImage=1"/>
      </SplideSlide>
      <SplideSlide>
        <img src="/src/assets/projects/sweets/Grundriss-03.png" class="splide-slide-image"
             @click="firstSlider.showImage=2">
      </SplideSlide>
      <SplideSlide>
        <img src="/src/assets/projects/sweets/Grundriss-04.png" class="splide-slide-image"
             @click="firstSlider.showImage=3"/>
      </SplideSlide>
    </Splide>
    <vue-easy-lightbox
        :visible="firstSlider.showImage !== false"
        :imgs="firstSlider.images"
        :index="firstSlider.showImage ? firstSlider.showImage : 0"
        @hide="firstSlider.showImage = false"
    />
  </div>
  <div class="hero-block">
    <div>
      {{ $t("sweets.heroBlockSix") }}
    </div>
  </div>
  <div class="main-content">
    <Splide :options="{start: 0}">
      <SplideSlide>
        <img src="/src/assets/projects/sweets/Ansicht-01.png" class="splide-slide-image"
             @click="firstSlider.showImage=0">
      </SplideSlide>
      <SplideSlide>
        <img src="/src/assets/projects/sweets/Ansicht-02.png" class="splide-slide-image"
             @click="firstSlider.showImage=1"/>
      </SplideSlide>
    </Splide>
  </div>
  <div class="hero-block">
    <div>
      {{ $t("sweets.heroBlockSeven") }}
    </div>
  </div>
  <img class="image-block" src="/src/assets/projects/sweets/1.50-Schnitt.png"/>
  <div class="hero-block">
    <div>
      {{ $t("sweets.heroBlockEight") }}
    </div>
  </div>
  <div class="main-content">
    <Splide :options="{start: 0}">
      <SplideSlide>
        <img src="/src/assets/projects/sweets/Schnitt-01.png" class="splide-slide-image">
      </SplideSlide>
      <SplideSlide>
        <img src="/src/assets/projects/sweets/Schnitt-02.png" class="splide-slide-image">
      </SplideSlide>
    </Splide>
  </div>
  <div class="full-screen-image"
       style="background-image: url('/src/assets/projects/sweets/Perspektiven-Innen.png'); margin-top: 40px">
  </div>
</template>

<script>
import VueEasyLightbox from 'vue-easy-lightbox'
import {Splide, SplideSlide} from '@splidejs/vue-splide';

export default {
  name: "project-sweets-view",
  components: {Splide, SplideSlide, VueEasyLightbox},
  data() {
    return {
      firstSlider: {
        showImage: false,
        images: [
          "/src/assets/projects/iku/Kellergeschoss%20Grundriss.jpg",
          "/src/assets/projects/iku/Grundriss%20EG.jpg",
          "/src/assets/projects/iku/Grundriss%20OG.jpg"
        ]
      }
    }
  }
}
</script>

<style lang="sass" scoped>
.top-element
  background-image: url('@/assets/projects/sweets/Aussenperspektive.png')

.hero-block
  background-color: #edc152

  div
    color: #000000

.threely
  font-size: 0
  width: 100%
  max-width: 1000px
  margin: 40px auto

  div
    display: inline-block
    vertical-align: top
    font-size: 60px
    text-align: center
    width: calc(33.3% - 20px)
    margin: 0 10px

    img
      width: 100%

    span
      font-size: 16px
      text-align: left
      display: block

</style>