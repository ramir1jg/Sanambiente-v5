import { TestBed } from '@angular/core/testing';

import { PartsService } from './Parts_Service';

describe('PartsServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PartsService = TestBed.get(PartsService);
    expect(service).toBeTruthy();
  });
});
