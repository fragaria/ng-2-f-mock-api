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
    - přidejte si jeho jméno do `dependencies` do `package.json` ve vašem projektu a dejte `npm install` (pokud zatím není publikován, publikuje module pomoci `npm --access public publish`)
    - nebo si udělejte link pomocí `npm link`, jděte do rootu vašeho projektu a zavolejte `npm link cesta-k-modulu`
- Přidejte si modul `MockApiModule` do projektu, tam kde ho potřebujete použít např. v `AppModule` do pole `imports`

```js

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }  from '@angular/http';

import { MockApiModule } from 'ng2-f-mock-api';

import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    MockApiModule.forRoot()
  ],
  declarations: [ AppComponent ],
  exports: [ AppComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

```

- Pokud vám nestačí data co jsou v tomto modulu, tak sem můžete přidat svá vlastní (soubor `src/mock-api/mock-data.ts` třída `MockData` metoda `createDb`), nebo je do modulu injecktnout z projektu (to je preferovaná varianta a jediná možná, pokud v projektu potřebujete mít modifikovány data, která už se zde nacházejí)

```js

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }  from '@angular/http';

import { MockApiModule } from 'ng2-f-mock-api';

import { AppComponent } from './app.component';

let items = [
  { id: 11, title: 'Whatever' },
  { id: 12, title: 'Thing' }
];

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    MockApiModule.forRoot({items: items})
  ],
  declarations: [ AppComponent ],
  exports: [ AppComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

```

- Volejte ve vašich službách místo ostré url mockovanou (např. `url = 'api/items'`)

```js

import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Item } from './item.model';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class ItemService {
  protected url = 'api/items';  // URL to web API
  protected model = Item;

  constructor (protected http: Http) { }

  getItems (): Observable<Item[]> {
    return this.http.get(this.url)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  protected extractData(res: Response): any {
    let body = res.json();
    return body.data;
  }

  protected handleError (error: Response | any): Observable<any> {
    console.log('error');
    return Observable.throw('error');
  }
}

```

### Tasky
- `npm test` - spuštění testů a coverage analýzy

### Tasky (validace)
- `gulp sonar` pro spuštění analýzy souborů na chyby

### Tasky (release)
- `npm version [patch|minor|major]` - pro zvednutí verze modulu
- `npm --access public publish` - pro nahrání na npm repository

### Troubleshooting
#### npm publish - ENEEDAUTH
Pro publikování balíčku je nutné se přihlásit příkazem `npm adduser`. Ten přidá autentikační token do ~/.npmrc. 
Při použití lokálního npm registru je nutné soubor editovat a nahradit adresu `/nexus/repository/npm-fast-group` za `/nexus/repository/npm-fast-private`.
