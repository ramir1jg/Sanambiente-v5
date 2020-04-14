import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CitiesBodyComponent } from './Cities_Body.component';

describe('BodyCiudadComponent', () => {
  let component: CitiesBodyComponent;
  let fixture: ComponentFixture<CitiesBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CitiesBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CitiesBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});