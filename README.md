# Kjente feil/mangler/tolkninger

- API-et returnerer feil data. Slik jeg skjønner det er dette grunnet GitHubs tidsbegrensninger: https://stackoverflow.com/questions/62885108/github-api-incomplete-results-for-a-simple-search

- TypeScript burde blitt brukt, men på en kjapp prototype tenker jeg at standard JS går greit.

- GraphQL har jeg ikke erfaring med, men noe slikt kunne kanskje blitt brukt for å spesifisere dataformatet vi forventer å få fra GitHub?

- Jeg skulle gjerne hatt statiske bredder på hver kolonne i tabellen. Dette kan sikkert tas hånd om av et tabellbibliotek.

- Beskrivelsesteksten for hvert repo skjules delvis, med hele teksten synlig på hover via title-attributtet. Dette bør kanskje ikke gjøres, men jeg ønsket å kunne bruke navigasjonsknappene på bunnen uten at de flyttet seg.

- Antallet repo-er pr. side burde heller være en state-variabel, og antallet sider kunne vært `Math.ceil(topRepos.length / reposPerPage)` hvis søket skulle returnert noe annet enn 100.

- Loading-indikatoren burde vært animert.

- tableHeaders burde ikke vært en hardkodet string-array, men heller hentet fra dataene ved hjelp av `Object.keys`, og kanskje mappet til noe mer leselig.- Dette med å ha dobbelt opp med pagineringsknapper er kanskje ikke helt standard. Det ble gjort for å ha dem lettere synlig, uavhengig av hvor i tabellen du er, men en bedre løsning hadde kanskje vært å hatt dem som en kolonne, helt ute til siden.

- `Array.slice` er greit i prototypesammenheng, men `Array.reduce` ville kunne gitt mer fleksibilitet med tanke på logikk og kodegjenbruk.

- Overgangen fra en side til en annen er øyeblikkelig. Folk blir kanskje litt satt ut av det? Selv tror jeg kanskje at en animasjon/overgang på 500ms kunne ha gjort opplevelsen bedre.