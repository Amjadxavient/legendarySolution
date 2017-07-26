import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 0, name: 'Zero' },
            { id: 11, name: 'Mr. Amjad' },
            { id: 12, name: 'Khan' },
            { id: 13, name: 'Anu' },
            { id: 14, name: 'Ankit' },
            { id: 15, name: 'Sahil' },
            { id: 16, name: 'Bucha' },
            { id: 17, name: 'Dynama' },
            { id: 18, name: 'Dr IQ' },
            { id: 19, name: 'Magma' },
            { id: 20, name: 'Tornado' }
    ];
    return {heroes};
  }
}
