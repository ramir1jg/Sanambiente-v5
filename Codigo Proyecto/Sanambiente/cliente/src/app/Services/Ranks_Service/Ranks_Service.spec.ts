import { TestBed } from '@angular/core/testing';

import { RanksService } from './Ranks_Service';

describe('RanksServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RanksService = TestBed.get(RanksService);
    expect(service).toBeTruthy();
  });
});
