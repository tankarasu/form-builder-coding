import { TestBed } from '@angular/core/testing';

import { RaceHTTPService } from './race-http.service';

describe('RaceHTTPService', () => {
  let service: RaceHTTPService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RaceHTTPService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
