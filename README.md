# ad-client #

## Sätta upp miljön ##

1. Installera node
  * Om du kör på osx är det lättast genom en homebrew som är en package manager http://treehouse.github.io/installation-guides/mac/node-mac.html
  * Om du kör på windows går det att tanka från https://nodejs.org/en/download/ (funkar även för mac)

2. Uppdatera npm
    * Öppna terminalen skriv "npm install npm -g" (kräver adminrättigheter)

2. Stå i projektet och skriv "npm install" i terminalen

3. Starta applicationen genom att skriva gulp i terminalen
   * serverapplicationen måste vara igång, starta den i ett nytt terminalfönster

5. Surfa in på http://localhost:4000

## Kör igång tester ##

### Sätta upp så att projektet kör protractor tester (integrationstester) ###

1. Installera protractor globalt
  * npm install -g protractor

2. Uppdatera webdriver-manager
  * webdriver-manager update

3. Starta webdrivern i ett nytt terminalfönster
  * webdriver-manager start

4. Starta serverapplikationen och clientapplicationen

5. Öppna ett nytt terminalfönster och starta testerna genom att skriva "npm test" i terminalen 



