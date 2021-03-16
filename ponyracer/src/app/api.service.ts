import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor() {}
  get(path: string): void {
    // call the backend API
  }
}
