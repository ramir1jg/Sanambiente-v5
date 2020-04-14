import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenanceTypeListComponent } from './maintenance_type_list.component';

describe('MaintenanceTypeListComponent', () => {
  let component: MaintenanceTypeListComponent;
  let fixture: ComponentFixture<MaintenanceTypeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintenanceTypeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintenanceTypeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
