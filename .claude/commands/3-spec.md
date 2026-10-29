---
description: Skriv designplan med bevegelsesplan for valgt skisse, og vent på godkjenning
argument-hint: MAPPE VALGT ENDRINGER
---
Argumenter: $ARGUMENTS (kundemappe først, deretter valgt skisse og eventuelle endringer).

1. Les `client-brief.md`, `skisser/OVERSIKT.md` og den valgte skissen.
2. Skriv `clients/<mappe>/design-spec.md` med:
   - Konsept og tone (3 linjer)
   - Tokens: farger (hex og kontrast), typografi (fonter, skala, linjehøyde), spacing og radier
   - Sider og seksjoner i rekkefølge, med formål og innhold per seksjon (bare verifiserte fakta, ellers MANGLER)
   - Bildeplan: hvor hvert bilde brukes, kilde og lisens eller merking
   - Bevegelsesplan: lastesekvens i hero, scroll-animasjoner per seksjon, hover og fokus, overganger, mikrointeraksjoner. Oppgi verktøy (CSS, GSAP + ScrollTrigger, Lenis), varighet og easing. Beskriv redusert-bevegelse-varianten og mobilvarianten.
   - Signaturelementet: det folk husker
   - Ytelsesbudsjett (maks vekt, antall forespørsler)
3. Stopp og be meg godkjenne planen. Ikke kod.
