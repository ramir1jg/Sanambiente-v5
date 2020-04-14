import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionsBodyComponent } from './Regions_Body.component';

describe('BodyRegionComponent', () => {
  let component: RegionsBodyComponent;
  let fixture: ComponentFixture<RegionsBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegionsBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegionsBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
