---
description: Lag kundemappe og fyll ut briefen fra bedriftens nettside
argument-hint: BEDRIFT URL
---
Argumenter: $ARGUMENTS (bedriftsnavn først, deretter URL eller sted hvis oppgitt).

1. Lag mappen `clients/<slug>/` ved å kopiere `clients/_mal/`. Slug: små bokstaver, bindestrek, ingen mellomrom, æ→ae, ø→o, å→a, ingen &. Ikke endre `clients/_mal/`.
2. Les bedriftens nettside (forside og alle viktige undersider). Søk også etter bedriften på nettet (Brønnøysundregistrene, Google-profil, Facebook, bransjeregistre).
3. Fyll ut `clients/<slug>/client-brief.md`. Hver faktaopplysning får en kilde. Det du ikke finner skriver du som MANGLER. Ikke gjett.
4. Mål dagens side med Playwright på 390 px og 1440 px: mobilproblemer, lastetid, konsollfeil, bildebruk. Legg funnene i briefen.
5. Lag tomme mapper `clients/<slug>/images/` og `clients/<slug>/skisser/`.
6. Avslutt med å spørre meg om dette, og vent på svar. Ikke gå videre:
   - Mål: hva skal besøkende gjøre (ring, bestill, book)?
   - Referansenettsider jeg liker (URL), eller skal du foreslå?
   - Stil i stikkord
   - Bilder: bedriftens egne / tydelig merkede plassholdere / AI-illustrasjoner merket som illustrasjon
   - Hva som ikke skal være med
   Skriv svarene inn i briefen under «Demoen» og «Stil / inspirasjon».

Ikke design eller kod noe i dette steget.
