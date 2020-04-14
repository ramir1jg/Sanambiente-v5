import { TestBed } from '@angular/core/testing';

import { AlertsService } from './Alerts_Service';

describe('AlertsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AlertsService = TestBed.get(AlertsService);
    expect(service).toBeTruthy();
  });
});
