<template>
  <div class="top-element full-screen-image"
       style="background-image: url('src/assets/projects/iku/Aussenperspektive-Final-.png')">
  </div>
  <div class="half">
    <div>
      <span class="giant">
        Dorf im Dorf
      </span>
    </div>
    <div>
      <span class="title">
        Kulturhaus Bad Wilsnack
      </span>
      <p>
        Bachelorthesis SOSE 2020<br>
        Bauen im Bestand<br>
        Wilhelm Franke
      </p>
      <p>
        Professorin Stephanie Kaindl<br>
        Professor Michael Mann
      </p>
      <p>
        Der Entwurf bezieht seine Identität aus dem Ort Bad Wilsnack mit seiner ländlich geprägten
        Bebauungsstruktur. Die Gebäudeform spielt mit Analogien aus der Umgebung und transformiert
        diese in eine eigene formale und funktionale Aussage. Als Bild entsteht ein vereinendes Gebäude,
        welches der Mittelpunkt der Kultur im Ort sein will und dieses auch nach außen hin ausstrahlt.
      </p>
      <p>
        Drei unterschiedliche Gebäudekubaturen stehen für die ländlich zergliederte Bebauung. Diese
        positionieren sich unabhängig voneinander auf dem Bestandssockel. Jede Kubatur bekommt dabei
        eine räumliche Funktion zugesprochen. Im Obergeschoss werden diese unabhängigen Gebäude miteinander vereint und
        bilden ein gesamtes Ensemble. Als Bildsprache entsteht ein Gebäude, welches die Gemeinde, die Kultur und die
        dörflichen Strukturen unter einem Dach vereint und diese verschiedenen Faktoren und Interessen in seinem
        Erscheinungsbild als Einheit wiederspiegelt. Kurzum: Es entsteht ein Dorf im Dorf.
      </p>
    </div>
  </div>
  <div class="hero-block">
    <div>
      Das Kulturhaus Bad Wilsnack positioniert sich auf der alten Schlossplatte und füllt diese komplett aus.
      Man erreicht es über die Straße „an der Nikolaikirche“ vom Park aus. Das Gebäude stellt sich direkt der St.
      Nikolai Wunderblutkirche entgegen, bildet dabei aber keinen neuen Landmarker. Vielmehr wird die Funktion als
      öffentliches Gebäude verdeutlicht. Auf der anderen Seite bindet es sich In die Natur und den Schlosspark ein.
    </div>
  </div>
  <div class="threely">
    <div>
      <img src="src/assets/projects/iku/Projekt-01-Pikto-01.png">
      <span>
        Setzten der 3 Kubatur auf die bestands Platte.
      </span>
    </div>
    <div>
      +
    </div>
    <div>
      <img src="src/assets/projects/iku/Projekt-01-Pikto-02.png">
      <span>
        Zusammenfügen der 3 einzelnen Gebäude durch das Obergeschoss.
      </span>
    </div>
    <div>
      =
    </div>
    <div>
      <img src="src/assets/projects/iku/Projekt-01-Pikto-03.png">
      <span>
        bilden ein gesamtes Ensemble, welches sich perfekt in die Umgebung einfügt.
      </span>
    </div>
  </div>
  <div class="hero-block">
    <div>
      Das Gebäude setzt sich aus drei einzelnen Gebäuden verschiedener Größe zusammen. Diese werden durch das
      Obergeschoss, welches das gesamte Baugrundstück ausfüllt, vereint. Jedes Gebäude besitzt ein Oberlicht.
    </div>
  </div>
  <img class="image-block" src="src/assets/projects/iku/LAGEPLAN FINAL.jpg"/>
  <div class="hero-block">
    <div>
      <p>
        Das Gebäude besitz zwei ebenbürtige Eingänge, welche jeweils leicht nach innen eingerückt sind und somit eine
        klare Eingangsgeste bilden.
      </p>
      <p>
        Der erste Eingang befindet sich zur Kirche hin orientiert. Man erreicht ihn direkt über die Große Straße.
        Der zweite Eingang befindet sich auf der Seite des Parks. Des weiteren kann man das Kulturhaus auch direkt über
        den historischen Bogengang aus dem Inneren der Wunderblutkirche erreichen. Das Kulturhaus besitzt eine
        großzügige, einläufige Treppe, die das gesamte Gebäude erschließt.
      </p>
      <p>
        Durch eine außenliegende Rampe und einen Fahrstuhl im Inneren ist das Gebäude vollständig barrierefrei nutzbar.
      </p>
    </div>
  </div>
  <div class="main-content">
    <Splide :options="{start: 1}">
      <SplideSlide>
        <img src="src/assets/projects/iku/Grundriss-KG.png" class="splide-slide-image" @click="firstSlider.showImage=0">
      </SplideSlide>
      <SplideSlide>
        <img src="src/assets/projects/iku/Grundriss-EG.png" class="splide-slide-image"
             @click="firstSlider.showImage=1"/>
      </SplideSlide>
      <SplideSlide>
        <img src="src/assets/projects/iku/Grundriss-OG.png" class="splide-slide-image"
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
    <div>
      <p>
        Das neue Kulturhaus stellt seinen Anspruch als neuen Mittelpunkt und Treffpunkt der Stadt klar da.
        Es soll sowohl ältere, wie auch jüngere Menschen in seinen Bann ziehen. Der große multifunktionale Saal kann
        verschiedenen Chor- und Kapellengruppen ein Platz zum Proben und Darstellen bieten. Darüber hinaus soll ein
        kleines Parkcafé im Gebäude Platz finden, welches Kurgäste sowie Pilgerreisende zum Verweilen animieren wird.
        Zusammengefasst entsteht somit ein neues Zentrum am alten Mittelpunkt Bad Wilsnacks, das die gesamte
        Bewohnerschaft vereint und auch ein neuer kultureller Mittelpunkt für die gesamte Region wird.
      </p>
      <p>
        Der Entwurf bezieht seine Identität aus dem Ort Bad Wilsnack mit seiner ländlich geprägten
        Bebauungsstruktur. Die Gebäudeform spielt mit Analogien aus der Umgebung und transformiert
        diese in eine eigene formale und funktionale Aussage. Als Bild entsteht ein vereinendes Gebäude,
        welches der Mittelpunkt der Kultur im Ort sein will und dieses auch nach außen hin ausstrahlt.
        Drei unterschiedliche Gebäudekubaturen stehen für die ländlich zergliederte Bebauung. Diese
        positionieren sich unabhängig voneinander auf dem Bestandssockel. Jede Kubatur bekommt dabei
        eine räumliche Funktion zugesprochen. Im Obergeschoss werden diese unabhängigen Gebäude
        miteinander vereint und bilden ein gesamtes Ensemble.
      </p>
    </div>
  </div>
  <div class="main-content">
    <Splide>
      <SplideSlide>
        <img src="src/assets/projects/iku/Ansicht-Nord.png" class="splide-slide-image">
      </SplideSlide>
      <SplideSlide>
        <img src="src/assets/projects/iku/Ansicht%20Ost.jpg" class="splide-slide-image">
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
    <div>
      <p>
        Die einzelnen Gebäudekubaturen bekommen jeweils eigene Raumfunktionen zugesprochen.
        So befindet sich im Erdgeschoss ein Parkcafé welches mit einem neuen, modern interpretierten Kreuzgewölbe eine
        Analogie zum Bestandsgewölbe des alten Schlosses bezieht. Neben den dienenden Räumen befindet sich außerdem eine
        große, individuell bespielbare Ausstellungsfläche im Erdgeschoss. An diese schließt sich eine Treppe an, die in
        den Gewölbekeller führt. In diesem werden die alten Särge der Grabstätten ausgestellt und es entsteht ein Raum
        der Ruhe und Andacht.
      </p>
      <p>
        Im Obergeschoss befindet sich der multifunktionale Saal, welcher durch seine einzigartige Form besonders
        polyvalent genutzt werden kann. Neben Aufführungen des ortsansässigen Orchesters oder Chores bietet er auch Raum
        für eine Winterkirche, Theateraufführungen, Gemeinde- oder Firmentagungen, wie auch Kunst- und Kulturabende von
        Solokünstlern.
      </p>
    </div>
  </div>
  <div class="main-content">
    <Splide :options="{start: 1}">
      <SplideSlide>
        <img src="src/assets/projects/iku/laengschnitt.jpg" class="splide-slide-image">
      </SplideSlide>
      <SplideSlide>
        <img src="src/assets/projects/iku/Schnitt%20Quer.jpg" class="splide-slide-image">
      </SplideSlide>
      <SplideSlide>
        <img src="src/assets/projects/iku/1-50%20Schnitt.jpg" class="splide-slide-image">
      </SplideSlide>
    </Splide>
  </div>
  <div class="hero-block">
    <div>
        Direkt angeschlossen an den Saal befindet sich ein großer Gruppen- und Vorbereitungsraum. Dieser ist direkt am
        Bogengang gelegen und ermöglicht es somit, von der Gemeinde während der Gottesdienste als abgetrennter Raum
        genutzt zu werden, beispielsweise für den Kindergottesdienst. Durch Oberlichter fällt indirekt Licht aus Norden
        in die Ausstellungsfläche im Obergeschoss. Hier sollen Exponate aus der Kirche und Wallfahrtsgeschichte
        präsentiert und ausgestellt werden. Das Kulturhaus Bad Wilsnack bildet sich als neue kultureller Mittelpunkt der
        Region aus. Dadurch erhält der Ort weitere Strahlkraft und bestärkt seine Wichtigkeit und geschichtliche
        Relevanz für die Region.
    </div>
  </div>
  <img class="image-block" src="src/assets/projects/iku/Parkcafe.png"/>
  <div class="hero-block">
    <div>
      Die Außenhaut des Gebäudes besteht aus einem geformten Lochblech. Diese gibt dem Gebäude eine transluzente Haut.
      Dabei steht sie in klarem Kontrast zu den Backsteinfassaden der Umgebung, bindet sich aber gleichzeitig in den
      Park und die Vegetation sowie Umgebung ein.
      Als Innenmaterial wurde Holz gewählt, welches Wärme und Geborgenheit wiederspiegelt. Die Ausstellungsfläche ist in
      neutralem Weiß gehalten.
    </div>
  </div>
  <div class="full-screen-image"
       style="background-image: url('src/assets/projects/iku/Modell_Foto_2.png'); margin-top: 40px">
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
          "src/assets/projects/iku/Kellergeschoss%20Grundriss.jpg",
          "src/assets/projects/iku/Grundriss%20EG.jpg",
          "src/assets/projects/iku/Grundriss%20OG.jpg"
        ]
      },
      secondSlider: {
        showImage: false,
        images: [
          "src/assets/projects/iku/Kellergeschoss%20Grundriss.jpg",
          "src/assets/projects/iku/Grundriss%20EG.jpg"
        ]
      },
      thirdSlider: {
        showImage: false,
        images: [
          "src/assets/projects/iku/Kellergeschoss%20Grundriss.jpg",
          "src/assets/projects/iku/Grundriss%20EG.jpg",
          "src/assets/projects/iku/Grundriss%20OG.jpg"
        ]
      }
    }
  }
}
</script>

<style lang="sass" scoped>
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