import { RaceService } from './race.service';
import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

// on indique à Angular que l'application est un component
@Component({
  // objet de configuration
  selector: 'ns-root', // requis pour la config, sélecteur dans la page HTML
  // templateUrl: './app.component.html', // template à afficher dans la page
  template: `
    <h1>{{ title }}</h1>
    <ns-races></ns-races>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(title: Title) {
    title.setTitle('pony Racer - bet on Ponies');
  }

  title = 'ponyracer';
  user: any;

  list(): void {}
}
