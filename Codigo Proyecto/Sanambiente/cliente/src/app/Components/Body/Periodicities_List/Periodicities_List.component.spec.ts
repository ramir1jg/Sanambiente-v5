import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeriodicitiesListComponent } from './Periodicities_List.component';

describe('PeriodicitiesListComponent', () => {
  let component: PeriodicitiesListComponent;
  let fixture: ComponentFixture<PeriodicitiesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeriodicitiesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeriodicitiesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
