import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectModbusStationComponent } from './connect-modbus-station.component';

describe('ConnectModbusStationComponent', () => {
  let component: ConnectModbusStationComponent;
  let fixture: ComponentFixture<ConnectModbusStationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConnectModbusStationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectModbusStationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
