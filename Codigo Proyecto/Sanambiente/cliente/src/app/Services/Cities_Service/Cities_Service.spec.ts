import { TestBed } from '@angular/core/testing';

import { CitiesService } from './Cities_Service';

describe('CiudadesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CitiesService = TestBed.get(CitiesService);
    expect(service).toBeTruthy();
  });
});
