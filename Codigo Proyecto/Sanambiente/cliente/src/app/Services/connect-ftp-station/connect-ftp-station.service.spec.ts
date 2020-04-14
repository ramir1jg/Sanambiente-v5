import { TestBed } from '@angular/core/testing';

import { ConnectFtpStationService } from './connect-ftp-station.service';

describe('ConnectFtpStationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConnectFtpStationService = TestBed.get(ConnectFtpStationService);
    expect(service).toBeTruthy();
  });
});
