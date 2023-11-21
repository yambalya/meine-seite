<template>
  <div class="hero top-element">
    <div>
      <div class="left">
        <span style="font-size: 100px">Wilhelm Franke</span>
        <span style="font-weight: normal"> {{ $t("CV.mainsite") }} </span>
      </div>
      <img src="/src/assets/meiner%202.jpeg">
    </div>
  </div>
  <div class="main-content">
    <div class="heading">
      {{ $t("curriculumVitae") }}
    </div>
    <div class="level">
      <div class="entry">
        <span class="title" v-html="$t('CV.cvContact')">
        </span>
        <span>
          Wilhelm Franke <br>
          {{ $t("CV.cvContactOne") }}<br>
        </span>
        <span>
          wilhelm_arc@outlook.de <br>
        </span>
      </div>

      <div class="entry">
        <span class="title" v-html="$t('CV.cvProgram')">
        </span>
        <span>ArchiCad</span>
        <span>Vektorworks</span>
        <span>Rhinoceros</span>
        <span>Microsoft Office</span>
        <span>InDesign</span>
        <span>Photoshop</span>
        <span>Illustrator</span>
      </div>

      <div class="entry">
        <span class="title" v-html="$t('CV.cvLanguages')">
        </span>
        <span> {{ $t("CV.cvLanguagesOne") }}</span>
        <span> {{ $t("CV.cvLanguagesTwo") }}</span>
        <span> {{ $t("CV.cvLanguagesThree") }}</span>
      </div>
    </div>
    <div class="level">
      <div class="entry">
        <span class="title" v-html="$t('CV.cvEducational')">
        </span>
        <span>
          <i>28.02.2023</i><br>
          <strong>{{ $t("CV.cvEducationalHeaderThree") }}</strong>
          Fachhochschule Erfurt University of Applied Science
        </span>
        <span>
          <i>03.02.2022-23.06.2022</i><br>
          <strong>{{ $t("CV.cvEducationalHeaderTwo") }}</strong>
          {{ $t("CV.cvEducationalThree") }}
        </span>
        <span>
          <i>30.09.2020</i><br>
          <strong>{{ $t("CV.cvEducationalHeaderOne") }}</strong>
          Fachhochschule Erfurt University of Applied Science
        </span>
        <span>
          <i>2017</i><br>
          <strong> {{ $t("CV.cvEducationalOne") }} </strong>
          {{ $t("CV.cvEducationalTwo") }}
        </span>
      </div>
    </div>
    <div class="level">
      <div class="entry">
        <span class="title">
          {{ $t("CV.cvWorkOne") }}
        </span>
        <span>
          <i>2020 - 2023</i> <br>
          <strong>{{ $t("CV.cvWorkSix") }}</strong>
          <i>Prof. Stephanie Kaindl </i> <br>
          <i>{{ $t("CV.cvWorkSeven") }}</i> <br> {{ $t("CV.cvWorkEight") }}
        </span>
        <span>
          <i>2021</i><br>
          <strong>{{ $t("CV.cvWorkSix") }}</strong>
          <i>Prof. Oliver Sachse</i> <br>
          <i>{{ $t("CV.cvWorkNine") }}</i> <br>
          {{ $t("CV.cvWorkEight") }}
        </span>
        <span>
          <i>2019 - 2020</i> <br>
          <strong>{{ $t("CV.cvWorkTwo") }}</strong>
          {{ $t("CV.cvWorkFour") }}<br>
          <i>{{ $t("CV.cvWorkFive") }}</i>
        </span>
        <span>
          <i>2018</i><br>
          <strong>{{ $t("CV.cvWorkTwo") }}</strong>
          Landschaftsgestaltung Straßen-, Tief und Wasserbau GmbH Freiberg<br>
          <i>{{ $t("CV.cvWorkThree") }}</i>
        </span>



      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "main-page"
}
</script>

<style lang="sass" scoped>
.left
  display: inline-block
  width: 50%
  vertical-align: top
  margin-top: 200px

  span
    color: white
    font-weight: bold
    display: block
    margin-top: 20px
    text-align: right

img
  display: inline-block
  width: calc(50% - 40px)
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

.level
  display: inline-block
  width: calc(33.3% - 20px)
  margin: 10px
  vertical-align: top

  .entry
    margin-top: 20px

    span
      display: block
      margin-bottom: 10px

      i
        opacity: 0.6
        font-weight: normal
        font-style: normal

      strong
        margin: 4px 0
        display: block

    .title
      font-size: 24px
      text-transform: uppercase
      margin-bottom: 20px


</style>