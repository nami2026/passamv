import { TestBed } from '@angular/core/testing';

import { MaterialStudy } from './material-study';

describe('MaterialStudy', () => {
  let service: MaterialStudy;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MaterialStudy);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
