import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { sample_heroes, } from 'src/data';
import { HEROES_BY_SEARCH_URL, HEROES_URL, HERO_BY_ID_URL } from '../shared/constants/urls';
import { Hero } from '../shared/models/Hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private http:HttpClient) { }

  getAll(): Observable<Hero[]> {
    return this.http.get<Hero[]>(HEROES_URL);
  }

  getAllHeroesBySearchTerm(searchTerm: string) {
    return this.http.get<Hero[]>(HEROES_BY_SEARCH_URL + searchTerm);
  }

  getHeroById(heroId:string):Observable<Hero>{
    return this.http.get<Hero>(HERO_BY_ID_URL + heroId);
  }

}
