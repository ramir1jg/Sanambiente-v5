import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VariableBodyComponent } from './Variables_Body.component';

describe('VariableBodyComponent', () => {
  let component: VariableBodyComponent;
  let fixture: ComponentFixture<VariableBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VariableBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VariableBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
