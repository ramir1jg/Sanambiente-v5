import { TestBed } from '@angular/core/testing';

import { MaintenancesTypeService } from './Maintenances_Type_Service';

describe('MaintenanceTypeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MaintenancesTypeService = TestBed.get(MaintenancesTypeService);
    expect(service).toBeTruthy();
  });
});
