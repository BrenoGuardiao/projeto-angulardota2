import { HeroService } from './../../../services/hero.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hero } from 'src/app/shared/models/Hero';

@Component({
  selector: 'app-hero-page',
  templateUrl: './hero-page.component.html',
  styleUrls: ['./hero-page.component.css']
})
export class HeroPageComponent implements OnInit {

  hero!: Hero;
  constructor(activatedRoute:ActivatedRoute, heroService:HeroService) {
    activatedRoute.params.subscribe((params) => {
      if(params.id)
      heroService.getHeroById(params.id).subscribe(serverHero => {
      this.hero = serverHero;
     });
    })
  }

  ngOnInit(): void {
  }

}
