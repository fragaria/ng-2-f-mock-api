import { InMemoryDbService } from 'angular-in-memory-web-api';

export class MockData implements InMemoryDbService {
  createDb() {
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
    return {
      clientsRelated: clientsRelated,
      items: items
    };
  }
}
