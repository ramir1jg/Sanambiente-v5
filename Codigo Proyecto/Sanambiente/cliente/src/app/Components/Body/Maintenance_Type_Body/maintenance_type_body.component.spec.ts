import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenanceTypeBodyComponent } from './maintenance_type_body.component';

describe('MaintenanceTypeBodyComponent', () => {
  let component: MaintenanceTypeBodyComponent;
  let fixture: ComponentFixture<MaintenanceTypeBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintenanceTypeBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintenanceTypeBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
