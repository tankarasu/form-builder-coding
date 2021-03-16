import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ns-races',

  template: `
    <div *ngIf="races.length > 0; else empty"><h2>Races</h2></div>
    <ng-template #empty>
      <h2>No Race</h2>
    </ng-template>
    <ul>
      <li *ngFor="let race of races | slice: -1; index as i">
        {{ i + 1 }} : {{ race.name | titlecase }}
      </li>
    </ul>
    <ns-ponies></ns-ponies>
  `,
  styleUrls: ['./races.component.css'],
})
export class RacesComponent implements OnInit {
  races: any = [{ name: 'London' }, { name: 'lyon' }];

  constructor() {}

  ngOnInit(): void {}
}
