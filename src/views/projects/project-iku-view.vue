<template>
  <div class="top-element full-screen-image">
  </div>
  <div class="half">
    <div>
      <span class="giant">
        {{ $t("iku.giant") }}
      </span>
    </div>
    <div>
      <span class="title">
       {{ $t("iku.title") }}
      </span>
      <p v-html="$t('iku.projectDescription')">
      </p>
    </div>
  </div>
  <div class="hero-block">
    <div>
      {{ $t("iku.heroBlockOne") }}
    </div>
  </div>
  <div class="threely">
    <div>
      <img src="/src/assets/projects/iku/Projekt-01-Pikto-01.png">
      <span>
        {{ $t("iku.threelyCaption.1") }}
      </span>
    </div>
    <div>
      +
    </div>
    <div>
      <img src="/src/assets/projects/iku/Projekt-01-Pikto-02.png">
      <span>
        {{ $t("iku.threelyCaption.2") }}
      </span>
    </div>
    <div>
      =
    </div>
    <div>
      <img src="/src/assets/projects/iku/Projekt-01-Pikto-03.png">
      <span>
       {{ $t("iku.threelyCaption.3") }}
      </span>
    </div>
  </div>
  <div class="hero-block">
    <div>
      {{ $t("iku.heroBlockTwo") }}
    </div>
  </div>
  <img class="image-block" src="/src/assets/projects/iku/LAGEPLANFINAL.jpg"/>
  <div class="hero-block">
    <div v-html="$t('iku.heroBlockDescriptionOne')">
    </div>
  </div>
  <div class="main-content">
    <Splide :options="{start: 1}">
      <SplideSlide>
        <img src="/src/assets/projects/iku/Grundriss-KG.png" class="splide-slide-image" @click="firstSlider.showImage=0">
      </SplideSlide>
      <SplideSlide>
        <img src="/src/assets/projects/iku/Grundriss-EG.png" class="splide-slide-image"
             @click="firstSlider.showImage=1"/>
      </SplideSlide>
      <SplideSlide>
        <img src="/src/assets/projects/iku/Grundriss-OG.png" class="splide-slide-image"
             @click="firstSlider.showImage=2">
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
    <div v-html="$t('iku.heroBlockDescriptionTwo')">
    </div>
  </div>
  <div class="main-content">
    <Splide>
      <SplideSlide>
        <img src="/src/assets/projects/iku/Ansicht-Nord.png" class="splide-slide-image">
      </SplideSlide>
      <SplideSlide>
        <img src="/src/assets/projects/iku/AnsichtOst.jpg" class="splide-slide-image">
      </SplideSlide>
    </Splide>
    <vue-easy-lightbox
        :visible="secondSlider.showImage !== false"
        :imgs="secondSlider.images"
        :index="secondSlider.showImage ? secondSlider.showImage : 0"
        @hide="secondSlider.showImage = false"
    />
  </div>
  <div class="hero-block">
    <div v-html="$t('iku.heroBlockDescriptionThree')">
    </div>
  </div>
  <div class="main-content">
    <Splide :options="{start: 1}">
      <SplideSlide>
        <img src="/src/assets/projects/iku/laengschnitt.jpg" class="splide-slide-image">
      </SplideSlide>
      <SplideSlide>
        <img src="/src/assets/projects/iku/SchnittQuer.jpg" class="splide-slide-image">
      </SplideSlide>
      <SplideSlide>
        <img src="/src/assets/projects/iku/1-50Schnitt.jpg" class="splide-slide-image">
      </SplideSlide>
    </Splide>
  </div>
  <div class="hero-block">
    <div>
      {{ $t("iku.heroBlockThree") }}
    </div>
  </div>
  <img class="image-block" src="/src/assets/projects/iku/Parkcafe.png"/>
  <div class="hero-block">
    <div>
      {{ $t("iku.heroBlockFour") }}
    </div>
  </div>
  <div class="full-screen-image bottom-element">
  </div>
</template>
<script>
import VueEasyLightbox from 'vue-easy-lightbox'
import {Splide, SplideSlide} from '@splidejs/vue-splide';

export default {
  name: "project-iku-view",
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
      },
      secondSlider: {
        showImage: false,
        images: [
          "/src/assets/projects/iku/Kellergeschoss%20Grundriss.jpg",
          "/src/assets/projects/iku/Grundriss%20EG.jpg"
        ]
      },
      thirdSlider: {
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
  background-image: url('@/assets/projects/iku/Aussenperspektive-Final-.png')

.bottom-element
  background-image: url('@/assets/projects/iku/Modell_Foto_2.png')
  margin-top: 40px

.hero-block
  background-color: #ccccd1

  div
    color: #000000

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