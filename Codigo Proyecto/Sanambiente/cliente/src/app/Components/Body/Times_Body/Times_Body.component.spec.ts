import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimesBodyComponent } from './Times_Body.component';

describe('TimesBodyComponent', () => {
  let component: TimesBodyComponent;
  let fixture: ComponentFixture<TimesBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimesBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimesBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
