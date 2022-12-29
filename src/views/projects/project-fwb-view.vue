<template>
  <div class="top-element full-screen-image"
       style="background-image: url('src/assets/projects/fwb/Renderning1.png')">
  </div>
  <div class="half">
    <div>
      <span class="giant">
        Anpassen und
        Herausstechen
      </span>
    </div>
    <div>
      <span class="title">
        Fassadenentwurf für ein Wohnhochhaus mit Büronutzung<br>
        Hubertusallee in Berlin
      </span>
      <p>
        Masterseminar WISE 2021/2022<br>
        Konstruktion + Planung<br>
        Tobias Dirnberger | Wilhelm Franke
      </p>
      <p>
        Professor Oliver Sachse<br>
        Dipl. -Ing. Andree Franke
      </p>
      <p>
        Für den Fassadenentwurf des Gebäudes an der Hubertusalle ist eine Mischnutzung vorgesehen.
        In den unteren 5 Geschossen sollen Geschäfte und Büroräume Platz finden. Darüber befinden sich Wohnungen.
      </p>
      <p>
        Das Grundstück befindet sich in der Nähe einer Autobahnauffahrt in Berlin. Es wird zweiseitig durch zwei
        Wohnungsbauriegel gefasst. Das Gebäude ist als Ensemble zweier einzelner Körper konzipiert, eines 5-geschossigen
        südlichen Volumens und eines nördlichen 16-geschossigen Turms. Beide Gebäudeteile werden durch einen zentralen
        Sicherheitstreppenraum erschlossen und entfluchtet. Die Geschosshöhen betragen im EG 4,50 m und in den
        Obergeschossen 3,50 m. Die Grundrisse sind so konzipiert, dass sowohl eine Wohnnutzung als Apartments als auch
        eine Büronutzung möglich ist.
      </p>
    </div>
  </div>
  <div class="hero-block">
    <div>
      Das Erdgeschoss wurde auf 6 Meter lichte Raumhöhe angehoben. Dadurch bekommt die im Erdgeschoss vorgesehene
      Nutzung von Geschäften eine repräsentative Rolle. An den Seiten, die zur Straße zeigen, wurde die Fassade um
      4 Meter herein geschoben, dadurch entstehen Arkaden, welche die öffentliche Wirkung des Erdgeschosses stärken.
      Ein weiterer Aspekt der Erhöhung des Erdgeschosses ist, das das Gebäude dadurch wie auf Tischbeinen steht und
      das Erdgeschoss dadurch eine gesonderte Stellung bekommt. Darüber befinden sich Büroräume, welche durch eine
      Elementfassade gegliedert sind. Diese Elemente werden nach oben hin immer größer. Damit bekommt das Gebäude
      eine auflössende Wirkung. Ein weiteres Element der Fassade ist der außen liegende Sonnenschutz. Dieser wird auf
      die volle Breite des Modules auf Sychienen befestigt und kann bei entsprechender Wetterlage beliebig und
      stufenlos heruntergefahren werden.
  </div>
  </div>
  <img class="image-block" src="src/assets/projects/fwb/lageplan-klein1.png"/>
  <div class="hero-block">
    <div>
      Die Konstruktion der Fassade besteht aus Elementfassa- denmodulen, die bei Hochhäusern recht häufig zum
      Einsatz kommt. Ein Modul besteht hierbei aus einer Lisene, einem Gesims, einer Festverglasung und einem
      Öffnungspaneel. Die Verglasung und das Paneel wechseln sich bei der Aneinanderreihung der Elemente ab, sodass
      ein einheitliches Gesamtbild entsteht. Die Befestigung an der Stirnseite der Stahlbetondecke ist bauphysikalisch
      die beste Lösung. Eine natürliche Belüftung des Gebäudes wird durch dreh- und kippbare Fassadenpaneele gewährleistet.
    </div>
  </div>
  <img class="image-block" src="src/assets/projects/fwb/Fassade-neu-Kopie.png"/>
  <div class="hero-block">
    <div>
      dkljglksdjlgkjsdlkgjsdölkgjödlsk lflkjsdlkgjsdlkjglksdjglkjsdlkgjdsgsdngklmsdlkgm
    </div>
  </div>
  <img class="image-block" src="src/assets/projects/fwb/fassade-final-2-Kopie.png"/>
</template>

<script>
export default {
  name: "project-fwb-view"
}
</script>

<style lang="sass" scoped>
.hero-block
  background-color: #c20e1b

  div
    color: #ffffff

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