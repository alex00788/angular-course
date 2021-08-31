import { TestBed } from '@angular/core/testing';

import { LocSService } from './loc-s.service';

describe('LocSService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LocSService = TestBed.get(LocSService);
    expect(service).toBeTruthy();
  });
});
