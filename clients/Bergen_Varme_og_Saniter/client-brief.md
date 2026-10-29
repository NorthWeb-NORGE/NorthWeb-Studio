# Brief: Bergen Varme & Sanitær AS

Dato opprettet: 2026-10-29
Status: demo klar (utkast, ikke sendt)

Kilder (lest 2026-10-29):
- [F] Forsiden: https://www.bergenvarmeogsanitaer.com/
- [K] Kontakt: https://www.bergenvarmeogsanitaer.com/kontakt
- [B] Bestill rørlegger: https://www.bergenvarmeogsanitaer.com/bestill
- [P] Privat-siden: https://www.bergenvarmeogsanitaer.com/about
- [S] Strukturerte data (schema.org LocalBusiness) i HTML-koden på forsiden, ikke synlig tekst
- [PW] Egen sjekk med Playwright, 390 px bredde, desktop-nettleser

## Bedriften
- Nettside i dag: https://www.bergenvarmeogsanitaer.com/ (laget i Wix, ut fra koden) [F]
- Kontaktperson og e-post:
  - Ove Larsen, daglig leder: 934 00 277, varmroe@online.no [K]
  - Torbjørn Espeland Olsen, rørleggermester: 934 67 183, torbj.olsen@gmail.com [K]
  - MANGLER: hvem av dem vi skal kontakte om demoen
- Bransje / hva de gjør: Rørleggerbedrift for private og bedrifter. Bad og våtrom, rør, vann og avløp, vannbåren varme og gulvvarme, minirenseanlegg, serviceavtale, sanitæranlegg, boligprosjekter, totalentreprise for bygg og næring, og rammeavtale. De selger også produkter som en rørleggerbutikk. [F, meny og tekst]
- Sted / område: «Bergen og omegn» [F]. Adresse i strukturerte data: Austre Sagstadvegen 74, 5243 Fana [S]. Adressen står ikke som synlig tekst på siden, så vi må bekrefte den. Org.nr. 985 465 363 [F, K]
- Åpningstider: «Mandag - Fredag 08-16» [F, K]
- Målgruppe: To spor på siden, «Privat» og «Proff» (bedrift, bygg og næring) [F, meny]. MANGLER: hvilket spor som er viktigst for dem

## Dagens nettside
- Hva fungerer:
  - Klar overskrift: «RØRLEGGER I BERGEN» (H1) [PW]
  - Telefon og e-post er lette å finne, og åpningstidene står på siden [F, K]
  - Har bestillingsskjema på /bestill og skjema på /kontakt [B, K]
  - Alle 28 bilder på forsiden har alt-tekst [PW]
  - Ingen konsollfeil, men 3 advarsler [PW]
- Problemer (mobil, design, hastighet, kontaktflyt, uklare tjenester):
  - Mobil: I en desktop-nettleser på 390 px vises desktop-oppsettet. Siden er 980 px bred, scroller sideveis, og overskriften blir kuttet («RØRLEG…») [PW]. Merk at Wix kan vise en egen mobilversjon på ekte telefoner. Ikke testet med mobil user-agent.
  - Forsiden er veldig lang: omtrent 16 900 px høy [PW]
  - Hastighet: omtrent 150 nettverksforespørsler og cirka 2 MB overført på forsiden [PW]. Forsidens HTML alene er omtrent 1 MB.
  - Uryddig struktur: mange undersider med standardnavn i URL-en, for eksempel «tom-side-1» til «tom-side-10», «sanitæranlegg-copy» og «about-2». «Om oss»-lenken går til en side med tittelen «Privat», og det finnes ingen egen om oss-tekst [F, P]
  - Menyen har mange nivåer med overlapp: «Rørleggertjenester», «Vannbåren varme» og «Kontakt oss» står både under Privat og Proff [F]
  - Bare én klikkbar tel:-lenke på forsiden [PW]
  - Cookie-banneret dekker en stor del av mobilskjermen ved første besøk [PW]
  - Copyright-året er «©2020» [F]
- Skjermbilder/notater: `.playwright-mcp/bvs-mobil-hjem.png` (mobilbredde, forsiden)

## Hva kunden ønsker
- Det de har sagt i e-post eller samtale (ordrett hvis mulig): MANGLER. Ingen kontakt ennå.

## Demoen
- Sider demoen skal ha: MANGLER. Forslag basert på dagens innhold: Forside, Privat, Proff/Bedrift, Om oss, Kontakt/Bestill.
- Funksjoner som må fungere (skjema, booking, kart, osv.): MANGLER. Dagens side har bestillingsskjema med ønsket tid og dato og «Hvor fant du oss?» [B], tilbudsside [F, lenke /få-tilbud] og klikk-for-å-ringe.
- Stil / inspirasjon / referanser: MANGLER. Dagens logo er rød, med initialene B, V og S i sirkler og undertittelen «AUTORISERT RØRLEGGER» [PW].
- Tone og språk (norsk/engelsk): Norsk (bokmål) [F]

## Fakta
- Fakta vi VET (med kilde):
  - Fullt navn: Bergen Varme & Sanitær AS. Org.nr. 985 465 363 [F, K]
  - «over 30 års erfaring med rørleggertjenester for private og bedrifter i Bergen og omegn» [F]
  - «sentralt godkjent og medlem av Rørentreprenørene Norge» [F]
  - Står oppført på mesterbedrifter.no og kaller seg «rørleggermester bedrift»: https://mesterbedrifter.no/bedrift/35461/bergen-varme-sanitr-as [F, lenke]
  - «Hos oss får du gratis og uforpliktende befaring.» «full dokumentasjon på arbeidet etter at jobben er utført» [B]
  - Ved befaring: «skisse på jobben», «oppdragsbeskrivelse, tidsramme og pris» [F]
  - «Vi koordinerer med elektriker, murer, snekker og maler.» «Vi tegner bad og gir deg fastpris på ditt prosjekt.» [P]
  - Erfaring med hytter, ombygging av butikker og restauranter, og minirenseanlegg fra søknad til installasjon [F]
  - Facebook-side: https://www.facebook.com/R%C3%B8rlegger-100656395325438 [F]
  - Ansatte: Ove Larsen, daglig leder, og Torbjørn Espeland Olsen, rørleggermester [K]
- Fakta vi IKKE vet (MANGLER):
  - MANGLER: om adressen i [S] er riktig, og om den skal vises
  - MANGLER: stiftelsesår og antall ansatte
  - MANGLER: kundeanmeldelser. Siden sier «Hvert år hjelper vi hundrevis av fornøyde kunder» [P], men det finnes ingen anmeldelser vi kan bruke.
  - MANGLER: priser (siden har ingen prisliste)
  - MANGLER: om de har døgnvakt eller akuttservice. Siden nevner vannlekkasje og rørbrudd, men oppgir bare åpningstid 08–16.
  - MANGLER: hvilke felt skjemaene har i dag. De vises ikke i HTML-koden, fordi Wix laster dem med JavaScript.
  - MANGLER: hva «Fullførte prosjekter» inneholder, og om bildene der er deres egne
  - MANGLER: om rørleggerbutikken har egen adresse eller åpningstid

## Tillatelser
- Lov å bruke (logo, bilder, tekst): MANGLER. Ikke avklart med kunden. Før vi har tillatelse bruker vi bare fakta fra kildene over, skrevet med egne ord, og ingen bilder eller logo fra siden deres.
- IKKE lov å bruke: MANGLER. Bildene på dagens side kan være stockfoto eller Wix-bilder, og rettighetene til dem er ukjente.
