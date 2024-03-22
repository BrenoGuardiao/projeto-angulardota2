import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { HeroService } from './../../../services/hero.service';
import { Hero } from 'src/app/shared/models/Hero';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    heroes:Hero[] = [];
    constructor(private heroService:HeroService, activatedRoute:ActivatedRoute) {
       let heroesObservable:Observable<Hero[]>;
        activatedRoute.params.subscribe((params) => {
        if(params.searchTerm)
        heroesObservable = this.heroService.getAllHeroesBySearchTerm(params.searchTerm);
        else
        heroesObservable = heroService.getAll();

        heroesObservable.subscribe((serverHeroes) => {
          this.heroes = serverHeroes;
        })

      })
    }

    ngOnInit(): void {
    }

  }


