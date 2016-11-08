import { InMemoryDbService } from 'angular-in-memory-web-api';

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
      { lang: 'cs', data: {
        "app": {
          "title": "Ahoj, světe!"
        },
        "title": "Ahoj, světe!",
        "bu0916.czech": "Česky",
        "bu0917.english": "English"
      }},
      { lang: 'en', data: {
        "app": {
          "title": "Hello, world!"
        },
        "title": "Hello, s world!",
        "bu0916.czech": "Czech",
        "bu0917.english": "English"
      }}
    ];
    return {
      clients: clients,
      clientsRelated: clientsRelated,
      items: items,
      resources: resources
    };
  }
}
