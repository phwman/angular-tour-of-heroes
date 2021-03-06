import { Component, OnInit } from '@angular/core';

import { Hero } from '../Hero';
// import { HEROES } from '../mock-heroes'
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  // hero : Hero = {
  //   id : 1,
  //   name : 'Windostorm'
  // };

  heroes : Hero[] = [];

  constructor(private heroService : HeroService, private messageService : MessageService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  selectedHero? : Hero;

  onSelect(hero : Hero) : void {
    this.selectedHero = hero;
    this.messageService.add(`HeroComponent : Selected Hero id =${hero.id}`);
  }

  getHeroes() : void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }
}
