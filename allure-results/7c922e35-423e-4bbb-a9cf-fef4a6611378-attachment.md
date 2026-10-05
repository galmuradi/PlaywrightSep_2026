# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Autocomplete.spec.js >> Handle Autocomplete using keyboard
- Location: tests\Autocomplete.spec.js:4:1

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.fill: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('combobox', { name: 'Search' })

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - generic [aria-hidden] [ref=e2]:
    - navigation [ref=e3]:
      - link [ref=e4] [cursor=pointer]:
        - /url: https://about.google/?fg=1&utm_source=google-NL&utm_medium=referral&utm_campaign=hp-header
        - text: Over
      - link [ref=e5] [cursor=pointer]:
        - /url: https://store.google.com/NL?utm_source=hp_header&utm_medium=google_ooo&utm_campaign=GS100042&hl=nl-NL
        - text: Store
      - generic [ref=e7]:
        - generic [ref=e8]:
          - link [ref=e10] [cursor=pointer]:
            - /url: https://mail.google.com/mail/&ogbl
            - text: Gmail
          - link [ref=e12] [cursor=pointer]:
            - /url: https://www.google.com/imghp?hl=nl&ogbl
            - text: Afbeeldingen
        - button [ref=e15] [cursor=pointer]
        - link [ref=e20] [cursor=pointer]:
          - /url: https://accounts.google.com/ServiceLogin?hl=nl&passive=true&continue=https://www.google.com/&ec=futura_exp_og_so_72776762_e
          - generic [ref=e21]: Inloggen
    - search [ref=e32]:
      - generic [ref=e34]:
        - generic [ref=e36]:
          - button [ref=e41] [cursor=pointer]
          - combobox [ref=e46]
          - generic [ref=e47]:
            - generic [ref=e48]:
              - button [ref=e51] [cursor=pointer]
              - button [ref=e56] [cursor=pointer]
            - link [ref=e59] [cursor=pointer]:
              - generic [ref=e61]: AI-modus
        - generic [ref=e67]:
          - button [ref=e68] [cursor=pointer]: Google Zoeken
          - button [ref=e69] [cursor=pointer]: Ik doe een gok
    - generic [ref=e72]:
      - text: "Google aangeboden in:"
      - link [ref=e73] [cursor=pointer]:
        - /url: https://www.google.com/setprefs?sig=0_hi254y2qSo-sP4bzb1lDOiZ3OX4%3D&hl=fy&source=homepage&sa=X&ved=0ahUKEwjb3-n1tZ6XAxVx3gIHHRvECmcQ2ZgBCCg
        - text: Frysk
      - link [ref=e74] [cursor=pointer]:
        - /url: https://www.google.com/setprefs?sig=0_hi254y2qSo-sP4bzb1lDOiZ3OX4%3D&hl=en&source=homepage&sa=X&ved=0ahUKEwjb3-n1tZ6XAxVx3gIHHRvECmcQ2ZgBCCk
        - text: English
    - contentinfo [ref=e76]:
      - generic [ref=e77]: Nederland
      - generic [ref=e78]:
        - generic [ref=e79]:
          - link [ref=e80] [cursor=pointer]:
            - /url: https://www.google.com/intl/nl_nl/ads/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1
            - text: Adverteren
          - link [ref=e81] [cursor=pointer]:
            - /url: https://www.google.com/services/?subid=ww-ww-et-g-awa-a-g_hpbfoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpbfooter&fg=1
            - text: Bedrijf
          - link [ref=e82] [cursor=pointer]:
            - /url: https://google.com/search/howsearchworks/?fg=1
            - text: Hoe Google Zoeken werkt
        - link [ref=e84] [cursor=pointer]:
          - /url: https://sustainability.google/?utm_source=googlehpfooter&utm_medium=housepromos&utm_campaign=bottom-footer&utm_content=
          - text: "Ons derde decennium van klimaatactie: dit is wat we doen"
        - generic [ref=e85]:
          - link [ref=e86] [cursor=pointer]:
            - /url: https://policies.google.com/privacy?hl=nl&fg=1
            - text: Privacy
          - link [ref=e87] [cursor=pointer]:
            - /url: https://policies.google.com/terms?hl=nl&fg=1
            - text: Voorwaarden
          - button [ref=e91] [cursor=pointer]:
            - generic [ref=e92]: Instellingen
  - generic:
    - dialog "Voordat je verdergaat naar Google Zoeken":
      - generic [ref=e99]:
        - generic [ref=e101]:
          - img "Google" [ref=e102]
          - generic [ref=e103]:
            - 'button "Taal: ‪Nederlands‬" [active] [ref=e105] [cursor=pointer]':
              - generic [ref=e106]: nl
            - link "Inloggen" [ref=e108] [cursor=pointer]
        - generic [ref=e109]:
          - heading "Voordat je verdergaat naar Google" [level=1] [ref=e110]
          - generic [ref=e111]:
            - generic [ref=e112]:
              - text: We gebruiken
              - link "cookies" [ref=e113] [cursor=pointer]:
                - /url: https://policies.google.com/technologies/cookies?utm_source=ucbs&hl=nl
              - text: "en gegevens, waaronder IP-adressen, voor het volgende:"
              - list [ref=e114]:
                - listitem [ref=e115]: Google-services leveren en onderhouden
                - listitem [ref=e116]: Uitval bijhouden en bescherming bieden tegen spam, fraude en misbruik
                - listitem [ref=e117]: Doelgroepbetrokkenheid en sitestatistieken meten om inzicht te krijgen in hoe onze services worden gebruikt en de kwaliteit van die services te verbeteren
            - generic [ref=e118]:
              - text: "Als je Alles accepteren kiest, gebruiken we cookies en gegevens, waaronder IP-adressen, ook voor het volgende:"
              - list [ref=e119]:
                - listitem [ref=e120]: Nieuwe services ontwikkelen en verbeteren
                - listitem [ref=e121]: Advertenties plaatsen en de effectiviteit ervan meten
                - listitem [ref=e122]: Gepersonaliseerde content tonen (afhankelijk van je instellingen)
                - listitem [ref=e123]: Gepersonaliseerde advertenties tonen (afhankelijk van je instellingen)
              - generic [ref=e124]: Als je Alles afwijzen kiest, gebruiken we cookies of IP-adressen niet voor deze aanvullende doeleinden.
            - generic [ref=e125]: Niet-gepersonaliseerde content wordt beïnvloed door factoren zoals de content die je op dat moment bekijkt, activiteit in je actieve zoeksessie en je locatie. Niet-gepersonaliseerde advertenties worden beïnvloed door de content die je op dat moment bekijkt en je algemene locatie. Gepersonaliseerde content en advertenties kunnen ook relevantere resultaten, aanbevelingen en op jou toegespitste advertenties omvatten die zijn gebaseerd op eerdere activiteit van deze browser, zoals uitgevoerde Google-zoekopdrachten. We gebruiken cookies en gegevens ook om te zorgen dat de functionaliteit geschikt is voor je leeftijd, als dit relevant is.
            - generic [ref=e126]: Selecteer Meer opties om meer informatie te bekijken, waaronder over hoe je je privacyinstellingen beheert. Je kunt ook altijd naar g.co/privacytools gaan.
        - generic [ref=e127]:
          - generic [ref=e128]:
            - button "Alles afwijzen" [ref=e129] [cursor=pointer]
            - button "Alles accepteren" [ref=e130] [cursor=pointer]
          - link "Meer opties voor personalisatie-instellingen en cookies" [ref=e132] [cursor=pointer]:
            - generic "Meer opties voor personalisatie-instellingen en cookies" [ref=e133]: Meer opties
        - generic [ref=e134]:
          - link "Privacy" [ref=e135] [cursor=pointer]:
            - /url: https://policies.google.com/privacy?hl=nl&fg=1&utm_source=ucbs
          - generic [aria-hidden] [ref=e136]: ·
          - link "Voorwaarden" [ref=e137] [cursor=pointer]:
            - /url: https://policies.google.com/terms?hl=nl&fg=1&utm_source=ucbs
```

# Test source

```ts
  1  | 
  2  | const { test, expect } = require('@playwright/test');
  3  | 
  4  | test('Handle Autocomplete using keyboard', async ({ page }) => {
  5  | 
  6  |     await page.goto('https://www.google.com');
  7  | 
  8  |     // Locate the Google search box
  9  |     const searchBox = page.getByRole('combobox', { name: 'Search' });
  10 | 
  11 |     // Type text
> 12 |     await searchBox.fill('playwright');
     |                     ^ Error: locator.fill: Test timeout of 30000ms exceeded.
  13 | 
  14 |     // Wait for autocomplete suggestions to appear
  15 |     await page.waitForTimeout(1000);
  16 | 
  17 |     // Navigate through suggestions using keyboard
  18 |     await page.keyboard.press('ArrowDown');
  19 |     await page.keyboard.press('ArrowDown');
  20 | 
  21 |     // Select the highlighted suggestion
  22 |     await page.keyboard.press('Enter');
  23 | 
  24 | });
```