import { Component } from '@angular/core';

// on indique à Angular que l'application est un component
@Component({ // objet de configuration
  selector: 'ns-root',// requis pour la config
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ponyracer';
}
