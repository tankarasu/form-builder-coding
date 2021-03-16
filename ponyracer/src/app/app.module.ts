import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; // permet l'affichage dans le browser

import { AppComponent } from './app.component';
import { RacesComponent } from './races/races.component';
import { PoniesComponent } from './ponies/ponies.component';

@NgModule({
  declarations: [AppComponent, RacesComponent, PoniesComponent], // importations des composants
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent], // indique le composant racine
})
export class AppModule {}
