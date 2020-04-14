import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectStationBodyComponent } from './Connect_Station_Body.component';

describe('ConnectStationBodyComponent', () => {
  let component: ConnectStationBodyComponent;
  let fixture: ComponentFixture<ConnectStationBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConnectStationBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectStationBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
