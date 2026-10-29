# Designnotater: Bergen Varme & Sanitær AS

Sist oppdatert: 2026-10-29
Status: Demoen er klar som utkast. Den er ikke sendt, og ingenting er committet.
Filer: `index.html`, `styles.css`, `script.js`, `fonts/` (Archivo og OFL-lisens). Ren HTML/CSS/JS uten rammeverk og uten byggesteg.

Les også `client-brief.md`. Den sier hva vi vet om bedriften og hva som fortsatt mangler.

---

## 1. Valgt retning: B «Rørtegning»

Siden er utformet som en montørtegning. Toppen viser en isometrisk strektegning av et rørsystem (varmtvannsbereder, servant og sluk), og bunnteksten er tegningshodet.

Hvorfor vi valgte denne:
- **Den bygger på det bedriften faktisk sier:** «Vi tegner bad og gir deg fastpris» og «skisse på jobben» ved befaring.
- **Fargene kommer fra navnet.** «Varme & Sanitær» blir rødt og blått, som varmt og kaldt på kranen.
- **Den trenger ingen bilder.** Vi har ikke tillatelse til kundens bilder eller logo, og illustrasjonen lager vi selv i SVG. Den er også lett å laste.
- **Den passer for både privat og bedrift**, uten den doble menyen den gamle siden har.

Forkastet:
- **A «Flis»** (flislagt vegg, Schibsted Grotesk): trengte badebilder vi ikke har lov til å bruke.
- **C «Bildøra»** (som dekoren på servicebilen, Barlow Condensed): for stor fare for å se billig ut.
- **Blå blueprint-bakgrunn**, første utkast av B: klisjé og dårlig lesbarhet.

Det viktigste prinsippet er at all dristighet ligger i rørtegningen. Resten av siden er rolig og stram.

---

## 2. Farger

| Token | Hex | Brukes til |
|---|---|---|
| `--paper` | `#F2F4F3` | Bakgrunn (tegnepapir) |
| `--sheet` | `#FAFBFA` | Flater: skjema, kontaktkort, tegningshode |
| `--graphite` | `#2B3033` | Tekst, konturer, avløpsrør, utkastbanner |
| `--graphite-soft` | `#545C61` | Sekundær tekst |
| `--hot` | `#C8312B` | Varmt vann og primærknapp |
| `--hot-dark` | `#A5261F` | Hover på primærknapp, feilmeldinger, utkaststatus |
| `--cold` | `#2A62A8` | Kaldt vann, lenker, fokusring |
| `--measure` | `#8C9499` | Merkestreker i tegningen og feltkanter. Ikke til tekst, fordi kontrasten er for lav. |
| `--rule` | `#CDD3D5` | Skillelinjer |

Regler:
- Rødt og blått betyr bare varmt og kaldt vann. Det skal ikke brukes til å skille privat fra bedrift.
- Rødt er den eneste fargen som brukes til knapper. Det er en tilnærming til logoen og justeres når vi får logofil.
- Kontrast: rød, blå og grafitt holder minst 4,5:1 mot papirbakgrunnen.

---

## 3. Typografi

- **Archivo** (variabel bredde og vekt) til alt. Den er selvhostet, med bare latin-delsettet (88 kB, SIL OFL).
  - Vi bruker ikke Google Fonts, både av hensyn til fart og personvern i EU.
  - Fonten forhåndslastes og har `font-display: swap`.
- Bredde (`wdth`) er det viktigste virkemiddelet:
  - 78 i H1, smal og tung som på en tegning
  - 84 i andre overskrifter (`--semi`)
  - 70 i merknader og etiketter i tegningen, i tegningshodet og i undertittelen på navnetrekket (`--narrow`)
  - 100 i brødtekst
- Størrelser:
  - H1: `clamp(2.375rem, 9vw, 4.5rem)`, linjeavstand 1,02, maks 13 tegn per linje
  - H2: `clamp(1.75rem, 4.5vw, 2.5rem)`
  - Brødtekst: 1,0625rem med linjeavstand 1,6
  - Ingress: 1,1875rem
  - Linjelengde: maks 34–36em
- Ikke bruk store bokstaver i etiketter, eyebrow-etiketter over overskrifter, kursiv eller farge på enkeltord i overskrifter, eller «→» i knapper.

---

## 4. Layout og seksjoner

Siden er én side, mobil først:
1. Utkastbanner
2. Header
3. Toppen med rørtegning
4. Slik jobber vi
5. Tjenester
6. Om oss
7. Bestill befaring
8. Tegningshode

- **Bredder:** innhold maks 1160px. Sidemarg 16px.
- **Brytepunkter:**
  - 560px: skjemaet får to kolonner, og kontaktkortene står side om side.
  - 600–959px: tegningen er maks 460px, så knappen kommer over folden på tablet.
  - 860px: desktopmenyen erstatter menyknappen. «Slik jobber vi» går vannrett, og tjenestene får to kolonner.
  - 960px: toppen, Om oss og Bestill får to kolonner.
- **Venstrejustert** overalt. Utkastbanneret er det eneste som er sentrert.
- **Nummerering** (1–4 i sirkler, koblet med en strek) brukes bare i «Slik jobber vi», fordi det er en ekte rekkefølge. Det er ingen nummerering andre steder.
- **Tegningshodet** er bunnteksten. Det er en rute-tabell med firma, org.nr., åpningstid, telefon, område, Facebook og status «Utkast». På mobil har den to kolonner, på desktop fire.

---

## 5. Rørtegningen

- SVG med `viewBox="0 0 420 330"`, `role="img"` og en `<title>` som beskriver tegningen. Etiketter og tegnforklaring er `aria-hidden`, fordi tittelen dekker innholdet.
- Tegnforklaringen viser rødt for varmt vann, blått for kaldt vann og stiplet grafitt for avløp.
- Det varme røret går ut nederst til venstre (x = 4) og fortsetter i en CSS-stump (`.hero-cta::before`) ned i «Bestill befaring».
  - Stumpen er plassert i prosent av viewBox-bredden, `calc(100% * 4 / 420)`, så den treffer på alle bredder.
  - Endrer du viewBox eller endepunktet, må du oppdatere stumpen også.
- Linjene har pathLength="1", så animasjonen kan bruke dasharray 1. Unntaket er avløpsrøret, som er stiplet og derfor tones inn i stedet.

---

## 6. Bevegelse

Siden har ett animert øyeblikk. Alt annet er stille.

- **Formål:** forklaring. Røret leder blikket ned til «Bestill befaring».
- **Teknikk:** CSS-animasjon av `stroke-dashoffset` med `--ease-out: cubic-bezier(0.23, 1, 0.32, 1)`.
- **Rekkefølge:**
  1. Konturer ved 0, 60 og 120 ms
  2. Kaldt vann fra 250 ms
  3. Varmt vann fra 600 ms
  4. Etikettene toner inn ved 900 ms
  5. Stumpen ned i knappen ved 1150 ms

  Hele sekvensen tar cirka 1,35 sekunder.
- **Start:**
  - Animasjonen står på pause (`.draw-wait`) til 25 % av knapperaden er synlig. Det styres med IntersectionObserver i `script.js`. Ellers ville røret truffet knappen utenfor skjermen på mobil.
  - Den spilles én gang per økt. Økten merkes i sessionStorage først når animasjonen faktisk starter.
  - Lastes ikke `script.js`, starter animasjonen ved `window load`, så tegningen aldri blir stående usynlig.
- **Redusert bevegelse:** tegningen vises ferdig, og bare etikettene toner inn (200 ms). Myk scrolling er slått av.
- **Andre overganger:**
  - Knappeklikk: `scale(0.97)`, 120 ms.
  - Hover: bare farge, 160 ms `ease`. Ingen hover flytter på noe.
- Gjennomgått med `review-animations` og godkjent. Rettelsene derfra er lagt inn.

---

## 7. Komponenter og interaksjon

- **Header:**
  - Navnetrekket er satt i tekst, ikke med logo, fordi vi ikke har tillatelse til logoen.
  - Firmanavnet har hardt mellomrom rundt «&» og `translate="no"`.
  - På mobil står «Ring oss» og «Meny» i headeren. Menyen kan lukkes med Escape, med klikk utenfor, ved klikk på en lenke og når vinduet blir bredt nok for desktopmenyen.
  - På desktop ligger «Ring oss» inne i menyen, så tab-rekkefølgen følger den visuelle rekkefølgen. Lenken i headeren er da skjult.
- **Knapper:**
  - Primærknappen er rød med hvit tekst. Sekundærknappen er omrisset i grafitt og fylles ved hover.
  - Minst 48px høye, med 4px avrunding.
  - Knapper og telefonlenker har `nowrap`, så telefonnummeret aldri brytes.
- **Fokus:** 3px blå omriss med 3px avstand, på alle interaktive elementer.
- **Skjema («Bestill befaring»):**
  - Felt: navn, telefon, e-post (valgfri), adresse, privat eller bedrift, melding, ønsket dato (valgfri) og «Hvor fant du oss?». Det siste er hentet fra kundens gamle skjema.
  - Påkrevde felt er ikke merket. Bare valgfrie felt er merket «(valgfritt)».
  - Plassholderne viser eksempler. Ellipsen er droppet på telefon og e-post, fordi «912 34 567…» så ut som et avkuttet nummer.
  - Tidligste dato er i dag. Den settes med Intl i lokal tid.
  - Feilene vises rett under feltet, og fokus går til første feil. Status meldes med `aria-live`.
  - Demoen sender ingenting. Den viser «Forespørselen er klar. Dette er en demo, så ingenting ble sendt.»

---

## 8. Innhold

- All tekst bygger på kundens egen nettside, med kilder i briefen. Vi har ikke diktet opp noe.
- **Bevisst utelatt** fordi det mangler eller er uklart:
  - anmeldelser
  - priser
  - adresse (den er ikke bekreftet)
  - akuttservice eller døgnvakt
  - fettutskiller
  - stiftelsesår og antall ansatte
- «Fastpris» står bare om bad, slik kilden sier.
- Utkastet er merket med `noindex, nofollow`, et banner øverst, «(utkast)» i tittelen og «Status: Utkast» i tegningshodet.

---

## 9. Åpne spørsmål og neste steg

- MANGLER-punktene i briefen. Viktigst er tillatelser til logo, bilder og tekst, og hvem vi skal kontakte.
- Med logofil: juster `--hot` mot logoens rødfarge, og vurder om logoen skal erstatte navnetrekket.
- Facebook-lenken fra den gamle siden videresender til en annen side-ID. Den bør bekreftes med kunden.
- Ikke testet ennå:
  - ekte telefoner
  - Safari og Firefox
  - skjermleser
  - om bevegelsen føles riktig, på en telefon og i tregere avspilling
