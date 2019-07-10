import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {
  createDb() {
    const heroes = [
      { id: 11, name: '狄仁杰' },
      { id: 12, name: '张飞' },
      { id: 13, name: '妲己' },
      { id: 14, name: '韩信' },
      { id: 3, name: '貂蝉' },
      { id: 16, name: '白起' },
      { id: 8, name: '铠' },
      { id: 18, name: '刘邦' },
      { id: 1, name: '武则天' },
      { id: 2, name: '后裔' }
    ];
    return {heroes};
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
constructor() { }

}
