---
description: Bygg demoen etter godkjent design-spec og test den i nettleseren
argument-hint: MAPPE
---
Kundemappe: `clients/$ARGUMENTS/`.

Krav: `design-spec.md` finnes og er godkjent av meg. Hvis ikke: stopp og si fra.

1. Bygg demoen i `demo/` etter `design-spec.md`. Ren HTML/CSS/JS, med GSAP, ScrollTrigger og Lenis lagret lokalt i `demo/vendor/` med fast versjon. Bruk `animate`-skillen og `emil-design-eng` for bevegelsen.
2. Bygg alle sider og seksjoner i planen, ikke bare forsiden. Følg planen nøyaktig. Avvik du må gjøre skriver du ned og begrunner.
3. Inkluder: `noindex`, utkast-banner, title og meta description, semantisk HTML, tydelig fokus, redusert bevegelse, mobilmeny.
4. Test med Playwright på 1440, 820 og 390 px. Ta skjermbilder på flere scrollposisjoner for å bekrefte animasjonene. Sjekk konsollfeil, lenker, skjema, tastaturnavigasjon og emulert `prefers-reduced-motion`.
5. Rett feil og test på nytt.
6. Rapporter kort: hva du testet, hva du ikke testet, og hva som avviker fra planen.
