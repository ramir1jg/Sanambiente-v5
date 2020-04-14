import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionsListComponent } from './Regions_List.component';

describe('ListRegionComponent', () => {
  let component: RegionsListComponent;
  let fixture: ComponentFixture<RegionsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegionsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegionsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
