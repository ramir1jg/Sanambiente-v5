import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeriodicitiesBodyComponent } from './Periodicities_Body.component';

describe('PeriodicitiesBodyComponent', () => {
  let component: PeriodicitiesBodyComponent;
  let fixture: ComponentFixture<PeriodicitiesBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeriodicitiesBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeriodicitiesBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
