import { InMemoryDbService, ParsedUrl } from 'angular-in-memory-web-api';

import { URLSearchParams } from '@angular/http';

export class MockData implements InMemoryDbService {
  createDb() {
    let clients = [
      { id: 10, name: "Michal Michal", personalIdentNumber: "9007260987", email: "michal@michal.cz" },
      { id: 11, name: "Jarda Jágr", personalIdentNumber: "7907260987", email: "jarda@michal.cz" },
      { id: 12, name: "Marta Nováková", personalIdentNumber: "7207260987", email: "marta@michal.cz" },
      { id: 13, name: "Karel Vomáčka", personalIdentNumber: "9007260907", email: "karel@michal.cz" },
      { id: 14, name: "Jan Novák", personalIdentNumber: "9109260987", email: "jan@li.cz" },
      { id: 15, name: "Janek Vomáčka", personalIdentNumber: "9209260987", email: "karel@li.cz" }
    ];
    let clientsRelated = [
      { id: 13, name: "Karel Vomáčka", personalIdentNumber: "9007260987", email: "karel@michal.cz", relatedWith: 1 },
      { id: 14, name: "Jan Novák", personalIdentNumber: "9109260987", email: "jan@li.cz", relatedWith: 1 },
      { id: 15, name: "Janek Vomáčka", personalIdentNumber: "9209260987", email: "karel@li.cz", relatedWith: 2 }
    ];
    let items = [
      { id: 11, title: 'Boots' },
      { id: 12, title: 'Gloves' },
      { id: 13, title: 'Cap' },
      { id: 14, title: 'Jacket' }
    ];
    let resources =[
      { lang: 'cs', module:'app' , data: {
        "app": {
          "title": "Ahoj, světe!!"
        },
        "title": "Ahoj, světe!!!",
        "bu0916.czech": "Česky",
        "bu0917.english": "English",
        "items": "app Prvky",
        "app.title": "Ahoj, světe!!!!"
      }},
      { lang: 'en', module:'app' , data: {
        "app": {
          "title": "Hello, world!"
        },
        "title": "Hello, world!!!",
        "bu0916.czech": "Česky",
        "bu0917.english": "English",
        "items": "app Items",
      }},
      { lang: 'cs', module:'item' , data: {
        "items": "Prvky z API",
      }},
      { lang: 'en', module:'item' , data: {
        "items": "Items from API",
      }}
    ];
    return {
      clients: clients,
      clientsRelated: clientsRelated,
      items: items,
      resources: resources
    };
  }

  protected getLocation(href: string) {
    const l = document.createElement('a');
    l.href = href;
    return l;
  }

  /*
   * Used instead of original parseUrl method
   * https://github.com/angular/in-memory-web-api/blob/0.1.13/src/in-memory-backend.service.ts#L509
   * becouse of it raises errors for any non mock urls
   */
  protected parseUrl(url: string): ParsedUrl {
    try {
      // If you have protocol send request out of mock api
      // original parseUrl raise error with 500 code
      if (url.match(/^https?:\/\//)) {
        return {
          base: '',
          collectionName: undefined,
          id: undefined,
          query: undefined,
          resourceUrl: undefined
        }
      }
      const loc = this.getLocation(url);
      let drop = 0;
      let urlRoot = '';
      if (loc.host !== '') {
        // url for a server on a different host!
        // assume it's collection is actually here too.
        drop = 1; // the leading slash
        urlRoot = loc.protocol + '//' + loc.host + '/';
      }
      const path = loc.pathname.substring(drop);
      let [base, collectionName, id] = path.split('/');
      const resourceUrl = urlRoot + base + '/' + collectionName + '/';
      [collectionName] = collectionName.split('.'); // ignore anything after the '.', e.g., '.json'
      const query = loc.search && new URLSearchParams(loc.search.substr(1));
      return { base, collectionName, id, query, resourceUrl };
    } catch (err) {
      const msg = `unable to parse url '${url}'; original error: ${err.message}`;
      throw new Error(msg);
    }
  }
}
