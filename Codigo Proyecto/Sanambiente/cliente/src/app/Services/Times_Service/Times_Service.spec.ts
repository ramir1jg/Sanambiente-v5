import { TestBed } from '@angular/core/testing';

import { TimesService } from './Times_Service';

describe('TimesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TimesService = TestBed.get(TimesService);
    expect(service).toBeTruthy();
  });
});