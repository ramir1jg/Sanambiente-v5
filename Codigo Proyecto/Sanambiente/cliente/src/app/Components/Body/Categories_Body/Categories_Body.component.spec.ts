import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesBodyComponent } from './Categories_body.component';

describe('CategoriesBodyComponent', () => {
  let component: CategoriesBodyComponent;
  let fixture: ComponentFixture<CategoriesBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriesBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriesBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
