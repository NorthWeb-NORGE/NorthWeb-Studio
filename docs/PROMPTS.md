# Northweb: slik lager vi en demo

Bruk én ny chat per kunde, og kjør kommandoene i rekkefølge. Kommandoene ligger i `.claude/commands/`.
Skriv `/` i Claude Code for å se dem. Virker ikke kommandoene i panelet, åpne filen og lim innholdet inn i chatten
(bytt `$ARGUMENTS` med det du ville skrevet etter kommandoen).

| # | Kommando | Du gir | Du får | Stopper for |
|---|---|---|---|---|
| 1 | `/1-brief BEDRIFT URL` | Navn og lenke | Kundemappe og brief med kilder | Du leser briefen og svarer på spørsmålene |
| 2 | `/2-skisser MAPPE` | Mappenavn | 5 ulike skisser og skjermbilder | Du velger én |
| 3 | `/3-spec MAPPE VALGT ENDRINGER` | Mappe og valgt skisse | `design-spec.md` med bevegelsesplan | Du godkjenner |
| 4 | `/4-bygg MAPPE` | Mappenavn | Ferdig demo i `demo/` og testrapport | |
| 5 | `/5-kritikk MAPPE` | Mappenavn | De 5 største svakhetene fikset | |
| 6 | `/6-ferdig MAPPE` | Mappenavn | Notater og sjekkliste | Du bestemmer om noe skal vises |

## Svar du bør ha klare i steg 1
- Mål: hva skal besøkende gjøre?
- 2-3 referansenettsider du synes ser dyre ut (Awwwards, Siteinspire, konkurrenter i andre land).
- Stil i stikkord.
- Bilder: bedriftens egne i `images/`, tydelige plassholdere, eller AI-illustrasjoner merket som illustrasjon.
- Hva som ikke skal være med.

## Hva du bør sjekke selv
- Steg 1: les briefen. Er adresse, åpningstider og tjenester riktige?
- Steg 2: se skjermbildene i `skisser/`. Velg den modigste du tør å stå for.
- Steg 4 og 5: åpne demoen i nettleseren selv. På mobil. Scroll sakte og se om bevegelsen er gjennomført.

## Husk
- Commit etter hvert steg. Ikke push før du er fornøyd.
- Demoen er et forslag. Ikke publiser den eller bruk kundens logo og bilder offentlig uten tillatelse.
- Skills og kommandoer deles via GitHub. Endrer du en kommando, commit endringen så alle får den.

## Kopier-ark (dobbeltklikk på stor tekst og lim inn det ekte)
- `BEDRIFT` = bedriftsnavnet, f.eks. flere ord er helt greit.
- `URL` = lenken til nettsiden deres (utelat hvis de ikke har en, og skriv sted i stedet).
- `MAPPE` = mappenavnet under `clients/` som `/1-brief` laget. Det står i svaret fra `/1-brief`, og i filutforskeren til venstre.
- `VALGT` = skissen du valgte, f.eks. v3.
- `ENDRINGER` = det du vil endre i valgt skisse (kan utelates).

```
/1-brief BEDRIFT URL
/2-skisser MAPPE
/3-spec MAPPE VALGT ENDRINGER
/4-bygg MAPPE
/5-kritikk MAPPE
/6-ferdig MAPPE
```
