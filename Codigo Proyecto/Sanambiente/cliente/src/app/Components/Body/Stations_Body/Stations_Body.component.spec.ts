import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StationsBodyComponent } from './Stations_Body.component';

describe('StationsBodyComponent', () => {
  let component: StationsBodyComponent;
  let fixture: ComponentFixture<StationsBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StationsBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StationsBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
