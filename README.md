## Mock api module

### Popis

Jedná se mock backendového api postaveného na modulu [in-memory-web-api](https://github.com/angular/in-memory-web-api)

### Příprava modulu
- Udělejte si `git clone` této repozitory
- Ujistěte se, že máte nainstalován [node.js](https://nodejs.org/)
- Spusťte `npm install -g typings typescript` pro instalaci globálních závislostí
- Spusťte `npm install -g karma-cli protractor` pro instalaci globálních testovacích závislostí
- Přidejte si do souboru `.npmrc` v modulu řádku `registry=https://kb-fast1.f-app.it/nexus/repository/npm-fast-group/`
- Přidejte si do souboru `.npmrc` v modulu svůj authToken (lze ho získat pomocí `npm login`, který vám ho po přihlášení vrátí do `.npmrc` ve vašem home adresáři a vy si ho přesunete do `.npmrc` v modulu)
- Spusťte `npm install` pro instalaci závislostí pro běh aplikace

### Použití
- Nainstalujte si modul do projektu (to můžete udělat jednou ze dvou následujících možností)
    - publikuje module pomoci `npm --access public publish` a přidejte si jeho jméno do `dependencies` do package.json ve vašem projektu a dejte `npm install`
    - nebo si udělejte link pomocí `npm link`, jděte do rootu vašeho projektu a zavolejte `npm link cesta-k-modulu`
- Přidejte si modul `MockApiModule` do projektu, tam kde ho potřebujete použít např. v `AppModule` do pole `imports` a pak jen volejte ve vašich službách místo ostré url mockovanou (např. `url = 'api/items'`)

### Tasky
- `npm test` - spuštění testů a coverage analýzy

### Tasky (validace)
- `gulp sonar` pro spuštění analýzy souborů na chyby

### Tasky (release)
- `npm version [patch|minor|major]` - pro zvednutí verze modulu
- `npm --access public publish` - pro nahrání na npm repository
