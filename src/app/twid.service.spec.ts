import { TestBed } from '@angular/core/testing';

import { TwidService } from './twid.service';

describe('TwidService', () => {
  let service: TwidService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TwidService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
