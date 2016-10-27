import { InMemoryDbService } from 'angular-in-memory-web-api';

export class MockData implements InMemoryDbService {
  createDb() {
    let clientsRelated = [
      { id: 13, name: "Karel Vomáčka", personalIdentNumber: "9007260987", email: "karel@michal.cz" },
      { id: 14, name: "Janek Vomáčka", personalIdentNumber: "9009260987", email: "karel@li.cz" }
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
