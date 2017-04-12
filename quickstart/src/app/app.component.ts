import { Component } from '@angular/core';
import { Hero } from './app/hero';

@Component({
  selector: 'my-app',
  template: `<h1>{{title}}</h1>
  <h2>My favorite hero is {{myHero.name}} with id {{myHero.id}}</h2>
  <p>Heroes: </p>
  <ul>
    <li *ngFor="let hero of heroes">
    {{hero.name}}
    </li>
  </ul>
  `
})
export class AppComponent  {
  // name = 'Sharat Maharjan';
  title="Tour of Heroes";
  heroes=[
    new Hero(1,'Bruce Lee'),
    new Hero(2,'Mike Tyson'),
    new Hero(3,'Michael Jackson'),
    new Hero(4,'Nelson Mandela'),
    new Hero(5,'Sharat Maharjan'),
    new Hero(6,'Albert Einstein')];
  myHero=this.heroes[6];
  }
