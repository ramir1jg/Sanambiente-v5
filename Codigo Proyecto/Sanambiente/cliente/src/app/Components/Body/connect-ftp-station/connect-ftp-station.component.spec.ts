import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectFTPStationComponent } from './connect-ftp-station.component';

describe('ConnectFTPStationComponent', () => {
  let component: ConnectFTPStationComponent;
  let fixture: ComponentFixture<ConnectFTPStationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConnectFTPStationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectFTPStationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
