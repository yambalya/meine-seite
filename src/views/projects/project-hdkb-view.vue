<script setup>
import aussen1 from '@/assets/projects/hdkb/Aussenperspektive-01-Final.png'
import aussen2 from '@/assets/projects/hdkb/Aussenperspektive-02-Final.png'
import finalImg from '@/assets/projects/hdkb/500-Bild-2.png'
 </script>
<template>
  <div class="top-element full-screen-image" :style="{backgroundImage: `url(${aussen1})`}">
  </div>
  <div class="half">
    <div>
      <span class="giant">
        {{ $t("hdkb.giant") }}
      </span>
    </div>
    <div>
      <span class="title" v-html="$t('hdkb.title')">
      </span>
      <p v-html="$t('hdkb.projectDescription')">
      </p>
    </div>
  </div>
  <div class="hero-block">
    <div>
      {{ $t("hdkb.heroBlockOne") }}
    </div>
  </div>
  <div class="threely">
    <div>
      <img src="/src/assets/projects/hdkb/Projekt-02-Pikto-04.png">
      <span>
        {{ $t("hdkb.threelyCaption.1") }}
      </span>
    </div>
    <div>
      <img src="/src/assets/projects/hdkb/Projekt-02-Pikto-05.png">
      <span>
        {{ $t("hdkb.threelyCaption.2") }}
      </span>
    </div>
    <div>
      <img src="/src/assets/projects/hdkb/Projekt-02-Pikto-06.png">
      <span>
        {{ $t("hdkb.threelyCaption.3") }}
      </span>
    </div>
  </div>
  <div class="threely">
    <div>
      <img src="/src/assets/projects/hdkb/Projekt-02-Pikto-07.png">
      <span>
        {{ $t("hdkb.threelyCaption.4") }}
      </span>
    </div>
    <div>
      <img src="/src/assets/projects/hdkb/Projekt-02-Pikto-08.png">
      <span>
        {{ $t("hdkb.threelyCaption.5") }}
      </span>
    </div>
    <div>
      <img src="/src/assets/projects/hdkb/Projekt-02-Pikto-09.png">
      <span>
        {{ $t("hdkb.threelyCaption.6") }}
      </span>
    </div>
  </div>
  <div class="hero-block">
    <div>
      {{ $t("hdkb.heroBlockTwo") }}
    </div>
  </div>
  <div class="threely">
    <div>
      <img src="/src/assets/projects/hdkb/Projekt-02-Pikto-01.png">
      <span>
        {{ $t("hdkb.threelyCaption.7") }}
      </span>
    </div>
    <div>
      <img src="/src/assets/projects/hdkb/Projekt-02-Pikto-02.png">
      <span>
        {{ $t("hdkb.threelyCaption.8") }}
      </span>
    </div>
    <div>
      <img src="/src/assets/projects/hdkb/Projekt-02-Pikto-03.png">
      <span>
        {{ $t("hdkb.threelyCaption.9") }}
      </span>
    </div>
  </div>
  <div class="hero-block">
    <div>
      {{ $t("hdkb.heroBlockThree") }}
    </div>
  </div>
  <img class="image-block" src="/src/assets/projects/hdkb/Lageplan_1-500-Final.png"/>
  <div class="hero-block">
    <div>
      {{ $t("hdkb.heroBlockFour") }}
    </div>
  </div>
  <div class="main-content">
    <Splide>
      <SplideSlide>
        <img src="/src/assets/projects/hdkb/Axo-Staedtebau-Final.png" class="splide-slide-image">
        <span class="image-caption">{{ $t("hdkb.splideCaption.1") }}</span>
      </SplideSlide>
      <SplideSlide>
        <img src="/src/assets/projects/hdkb/Projekt-02-Pikto-10.png" class="splide-slide-image"/>
        <span class="image-caption">{{ $t("hdkb.splideCaption.2") }}</span>
      </SplideSlide>
      <SplideSlide>
        <img src="/src/assets/projects/hdkb/Projekt-02-Pikto-11.png" class="splide-slide-image"/>
        <span class="image-caption">{{ $t("hdkb.splideCaption.3") }}</span>
      </SplideSlide>
      <SplideSlide>
        <img src="/src/assets/projects/hdkb/Projekt-02-Pikto-12.png" class="splide-slide-image"/>
        <span class="image-caption">{{ $t("hdkb.splideCaption.4") }}</span>
      </SplideSlide>
      <SplideSlide>
        <img src="/src/assets/projects/hdkb/Projekt-02-Pikto-13.png" class="splide-slide-image"/>
        <span class="image-caption">{{ $t("hdkb.splideCaption.5") }}</span>
      </SplideSlide>
      <SplideSlide>
        <img src="/src/assets/projects/hdkb/Projekt-02-Pikto-14.png" class="splide-slide-image"/>
        <span class="image-caption">{{ $t("hdkb.splideCaption.6") }}</span>
      </SplideSlide>
      <SplideSlide>
        <img src="/src/assets/projects/hdkb/Projekt-02-Pikto-15.png" class="splide-slide-image"/>
        <span class="image-caption">{{ $t("hdkb.splideCaption.7") }}</span>
      </SplideSlide>
      <SplideSlide>
        <img src="/src/assets/projects/hdkb/Projekt-02-Pikto-16.png" class="splide-slide-image"/>
        <span class="image-caption">{{ $t("hdkb.splideCaption.8") }}</span>
      </SplideSlide>
      <SplideSlide>
        <img src="/src/assets/projects/hdkb/Axo-EG.png" class="splide-slide-image"/>
        <span class="image-caption">{{ $t("hdkb.splideCaption.9") }}</span>
      </SplideSlide>
    </Splide>
  </div>
  <div class="hero-block">
    <div>
      {{ $t("hdkb.heroBlockFive") }}
    </div>
  </div>
  <div class="full-screen-image"
       :style="{backgroundImage: `url(${aussen2})`, marginTop: 0}">
  </div>
  <div class="hero-block">
    <div>
      {{ $t("hdkb.heroBlockSix") }}
    </div>
  </div>
  <div class="main-content">
    <Splide :options="{start: 1}">
      <SplideSlide>
        <img src="/src/assets/projects/hdkb/Grundriss-EG.png" class="splide-slide-image"
             @click="firstSlider.showImage=1">
      </SplideSlide>
      <SplideSlide>
        <img src="/src/assets/projects/hdkb/Grundriss-1OG.png" class="splide-slide-image"
             @click="firstSlider.showImage=2"/>
      </SplideSlide>
      <SplideSlide>
        <img src="/src/assets/projects/hdkb/Grundriss-2OG.png" class="splide-slide-image"
             @click="firstSlider.showImage=3">
      </SplideSlide>
      <SplideSlide>
        <img src="/src/assets/projects/hdkb/Grundriss-3OG.png" class="splide-slide-image"
             @click="firstSlider.showImage=4"/>
      </SplideSlide>
      <SplideSlide>
        <img src="/src/assets/projects/hdkb/Grundriss-4OG.png" class="splide-slide-image"
             @click="firstSlider.showImage=5">
      </SplideSlide>
      <SplideSlide>
        <img src="/src/assets/projects/hdkb/Grundriss-5OG.png" class="splide-slide-image"
             @click="firstSlider.showImage=6"/>
      </SplideSlide>
      <SplideSlide>
        <img src="/src/assets/projects/hdkb/Grundriss-6OG.png" class="splide-slide-image"
             @click="firstSlider.showImage=7">
      </SplideSlide>
      <SplideSlide>
        <img src="/src/assets/projects/hdkb/Grundriss-7OG.png" class="splide-slide-image"
             @click="firstSlider.showImage=8"/>
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
      {{ $t("hdkb.heroBlockSeven") }}
    </div>
  </div>
  <div class="main-content">
    <Splide :options="{start: 1}">
      <SplideSlide>
        <img src="/src/assets/projects/hdkb/Ansicht_Laengs_1_200.png" class="splide-slide-image">
      </SplideSlide>
      <SplideSlide>
        <img src="/src/assets/projects/hdkb/Schnitt_Laengs_1_200.png" class="splide-slide-image"/>
      </SplideSlide>
      <SplideSlide>
        <img src="/src/assets/projects/hdkb/Ansicht_Quer_1_200.png" class="splide-slide-image">
      </SplideSlide>
    </Splide>
  </div>
  <div class="hero-block">
    <div v-html="$t('hdkb.heroBlockDescriptionOne')">
    </div>
  </div>
  <img class="image-block" src="/src/assets/projects/hdkb/1_50-Schnitt_Ansicht.png"/>
  <div class="hero-block">
    <div>
      {{ $t("hdkb.heroBlockEight") }}
    </div>
  </div>
  <img class="image-block" src="/src/assets/projects/hdkb/Innenperspektive_Final-01.png"/>
  <div class="hero-block">
    <div>
      {{ $t("hdkb.heroBlockNine") }}
    </div>
  </div>
  <div class="full-screen-image"
       :style="{backgroundImage: `url(${finalImg})`, marginTop: '40px'}">
  </div>
</template>

<script>
import VueEasyLightbox from 'vue-easy-lightbox'
import {Splide, SplideSlide} from '@splidejs/vue-splide';

export default {
  name: "project-hdkb-view",
  components: {Splide, SplideSlide, VueEasyLightbox},
  data() {
    return {
      firstSlider: {
        showImage: false,
        images: [
          "/src/assets/projects/iku/KellergeschossGrundriss.jpg",
          "/src/assets/projects/iku/Grundriss-EG.jpg",
          "/src/assets/projects/iku/Grundriss-OG.jpg"
        ]
      }
    }
  }
}
</script>

<style lang="sass" scoped>
.top-element
  background-image: url('@/assets/projects/hdkb/Aussenperspektive-01-Final.png')

.hero-block
  background-color: #6db387

  div
    color: #ffffff

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