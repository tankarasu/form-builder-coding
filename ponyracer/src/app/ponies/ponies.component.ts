import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ns-ponies',
  template: `
    <h3>Ponies Component</h3>
    <button (click)="refreshPonies()">Click for refresh</button>
    <ul>
      <li
        *ngFor="let ponie of ponies; even as isEven"
        [style.color]="isEven ? 'green' : 'black'"
      >
        {{ ponie.name }}
      </li>
    </ul>
  `,
  styleUrls: ['./ponies.component.css'],
})
export class PoniesComponent implements OnInit {
  ponies: Array<any> = [{ name: 'Rainbow Dash' }, { name: 'Pinkie Pie' }];

  refreshPonies(): void {
    this.ponies = [
      { name: 'Fluttershy' },
      { name: 'Rarity' },
      { name: 'Rainbow Attack' },
      { name: 'Light' },
    ];
  }
  constructor() {}

  ngOnInit(): void {}
}
