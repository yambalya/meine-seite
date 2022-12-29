<template>
  <div class="top-element full-screen-image"
       style="background-image: url('src/assets/projects/sweets/Außenperspektive.png')">
  </div>
  <div class="half">
    <div>
      <span class="giant">
        Land-Stadt Hub
      </span>
    </div>
    <div>
      <span class="title">
        Ehemalige Schokoladenfabrik Greußen<br>
        Revitalisierung von Industrie Architektur
      </span>
      <p>
        Masterprojektstudio WISE 2021/2022<br>
        Bauen im Bestand<br>
        Wilhelm Franke
      </p>
      <p>
        Professorin Stephanie Kaindl
      </p>
      <p>
        Am Standort der alten Schokoladenfabrik in Greußen soll ein Stadt-Land-Hub entstehen.
        Die Fabrik ist ein Landmark der Greußener Industriekultur und spiegelt die ehemalige wirtschaftliche Bedeutung
        der Stadt wider. Das neue Nutzungsszenario sieht vor, dass neben Wohnen, Kultur und Arbeiten auch eine
        Manufaktur wieder in das Gebäude einzieht. Hervorragend an Straße und Schiene angeschlossen könnte Greußen
        das große Potential des Gebäudes nutzen um hier einen neuen pulsierenden Mittelpunkt für die Landgemeinde zu
        schaffen. Das Hauptaugenmerk liegt dabei auf einen neuen Kultursaal, der zum Anziehungspunkt für die Bevölkerung
        werden soll.
      </p>
    </div>
  </div>
  <div class="hero-block">
    <div>
      Drei architektonische Interventionen markieren besondere Orte im Bestandsgebäude und machen den Neubeginn
      sichtbar. Von der Innenstadt kommend, bzw. beim Aussteigen aus dem Zug wird der Blick von drei goldenen auf das
      ehemalige Kesselhaus aufgesetzte Hauben gefangen. Sie „bekrönen“ den zentral gelegenen Kultursaal, das
      Herzstück der neuen Anlage, das durch diese neue Gestaltung große Strahlkraft entwickelt. Sie stellen mit
      ihrer eigenwilligen Gestaltung eine ambivalente Verbindung zum Bestand her.
    </div>
  </div>
  <img class="image-block" src="src/assets/projects/sweets/Pikto-Szenarien-.png"/>
  <div class="hero-block">
    <div>
      Themen wie das geneigte Dach und die Geometrie der Rundbogenfenster werden aufgegriffen, isoliert und zu einem
      zeitgenössischen Architekturelement neu zusammengefügt. Das metallisch reflektierende Bekleidungsmaterial wirkt
      leicht und flüchtig und steht im Kontrast zu den robusten Tuffstein- und Klinkerfassaden.
    </div>
  </div>
  <div class="threely">
    <div>
      <img src="src/assets/projects/sweets/Projekt-03-Pikto-01.png">
      <span>
        Drei unterschiedliche Plätze definieren das Grundstück. Einen Mobilitätsplatz mit Parkplätzen für Fahrrad
        und Autos. Einen öffentlichen für Veranstaltungen sowie einen eher privaten grünen Platz für die Bewohner.
      </span>
    </div>
    <div>
      <img src="src/assets/projects/sweets/Projekt-03-Pikto-02.png">
      <span>
        Das Grundstück ist sehr gut angebunden. Der Bahnhof ist direkt gegenüber.
        Auf das Grundstück kommt man von zwei Seiten.
      </span>
    </div>
    <div>
      <img src="src/assets/projects/sweets/Projekt-03-Pikto-03.png">
      <span>
        Blickpunkte auf das Grundstück.
      </span>
    </div>
  </div>
  <div class="threely">
    <div>
      <img src="src/assets/projects/sweets/Projekt-03-Pikto-04.png">
      <span>
        Momentaner Bestand.
      </span>
    </div>
    <div>
      <img src="src/assets/projects/sweets/Projekt-03-Pikto-05.png">
      <span>
        Addition/ Eingriffe in den Bestand.
      </span>
    </div>
    <div>
      <img src="src/assets/projects/sweets/Projekt-03-Pikto-06.png">
      <span>
        Neues Assamblee.
      </span>
    </div>
  </div>
  <div class="hero-block">
    <div>
      Vier weitere „Hauben“ werden als Dachgauben auf das ehemalige Arbeiterwohnhaus aufgesetzt und verbessern die
      Nutzbarkeit der 2. Obergeschossebene. Die dritte Intervention ist ein skulptural wirkender Treppen- und Aufzugsturm
      auf dem nordwestlichen Vorplatz, der vorrangig die Co-Working-Spaces in Bonbon- und Schokoladenlager / Kakaomühle
      sowie das temporäre Wohnen im Schnitzelhaus erschließt, vor allem aber einen neuen prominenten Eingang formuliert.
      Im Innenraum kehren die „Hauben“ als räumliche Einbauten z.B. als Think-Boxen im Co-Working-Bereich wieder.
    </div>
  </div>
  <img class="image-block" src="src/assets/projects/sweets/Lageplan-Final.png"/>
  <div class="hero-block">
    <div>
      Die Goldhauben geben dem Areal einen starken neuen Charakter. Sie zielen auf Fernwirkung ab.
      Aber auch beim Näherkommen zeigen sich die Qualitäten des Entwurfs
    </div>
  </div>
  <div class="full-screen-image"
       style="background-image: url('src/assets/projects/sweets/Axometrie.png'); margin-top: 0">
  </div>
  <div class="hero-block">
    <div>
      Unterschiedliche Erdgeschossnutzungen sprechen viele Teile der Bevölkerung an: In der Fabrikantenvilla ist eine
      Kita untergebracht, im ehemaligen Kesselhaus ein Biomarkt, an den die kleine Schokoladenmanufaktur anschließt.
      Nonchalant geht der Supermarkt in das Foyer des Kultursaals über, von wo eine elegante große Wendeltreppe ins
      Obergeschoss führt.
    </div>
  </div>
  <div class="main-content">
    <Splide :options="{start: 0}">
      <SplideSlide>
        <img src="src/assets/projects/sweets/Grundriss-01.png" class="splide-slide-image"
             @click="firstSlider.showImage=0">
      </SplideSlide>
      <SplideSlide>
        <img src="src/assets/projects/sweets/Grundriss-02.png" class="splide-slide-image"
             @click="firstSlider.showImage=1"/>
      </SplideSlide>
      <SplideSlide>
        <img src="src/assets/projects/sweets/Grundriss-03.png" class="splide-slide-image"
             @click="firstSlider.showImage=2">
      </SplideSlide>
      <SplideSlide>
        <img src="src/assets/projects/sweets/Grundriss-04.png" class="splide-slide-image"
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
      Im nächsten Gebäudeteil schließt ein Bistro / Café an, das wiederum in Verbindung mit dem Indoor-Skatepark
      steht, der zum asphaltierten, fürs Skaten ideal geeigneten Anlieferungshof im Nordwesten ausgerichtet ist.
      Geschickt werden Verkehrswege kanalisiert, sodass keine Konflikte entstehen, aber vielerlei Begegnungen möglich sind.
    </div>
  </div>
  <div class="main-content">
    <Splide :options="{start: 0}">
      <SplideSlide>
        <img src="src/assets/projects/sweets/Ansicht-01.png" class="splide-slide-image"
             @click="firstSlider.showImage=0">
      </SplideSlide>
      <SplideSlide>
        <img src="src/assets/projects/sweets/Ansicht-02.png" class="splide-slide-image"
             @click="firstSlider.showImage=1"/>
      </SplideSlide>
    </Splide>
  </div>
  <div class="hero-block">
    <div>
      Menschen aller Altersgruppen und mit unterschiedlichsten Lebensmodellen werden angesprochen und finden Anlass,
      das Gelände der Schokoladenfabrik aufzusuchen. Sie erhalten niedrigeschwelligen Zugang zu diversen Kultur- und
      Freizeitangeboten, die sich auch auf den Außenraum erstrecken: Der Vorplatz zum Bahnhof soll ein sehr öffentlicher
      Raum werden mit Veranstaltungen wie Freilufttheater und Wochenmärkte stattfinden.
    </div>
  </div>
  <img class="image-block" src="src/assets/projects/sweets/1.50-Schnitt.png"/>
  <div class="hero-block">
    <div>
      Die Weichen für einen lebendigen Ortsmittelpunkt sind gestellt.
    </div>
  </div>
  <div class="main-content">
    <Splide :options="{start: 0}">
      <SplideSlide>
        <img src="src/assets/projects/sweets/Schnitt-01.png" class="splide-slide-image">
      </SplideSlide>
      <SplideSlide>
        <img src="src/assets/projects/sweets/Schnitt-02.png" class="splide-slide-image">
      </SplideSlide>
    </Splide>
  </div>
  <div class="full-screen-image"
       style="background-image: url('src/assets/projects/sweets/Perspektiven-Innen.png'); margin-top: 40px">
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