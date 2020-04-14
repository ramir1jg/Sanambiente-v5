import { TestBed } from '@angular/core/testing';

import { PeriodicitiesService } from './Periodicities_Service';

describe('PeriodicitiesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PeriodicitiesService = TestBed.get(PeriodicitiesService);
    expect(service).toBeTruthy();
  });
});
