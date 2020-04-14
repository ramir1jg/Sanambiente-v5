import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VariablesListComponent } from './Variables_List.component';

describe('VariablesListComponent', () => {
  let component: VariablesListComponent;
  let fixture: ComponentFixture<VariablesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VariablesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VariablesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
