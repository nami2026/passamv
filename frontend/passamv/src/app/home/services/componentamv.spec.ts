import { TestBed } from '@angular/core/testing';

import { Componentamv } from './componentamv';

describe('Componentamv', () => {
  let service: Componentamv;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Componentamv);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
