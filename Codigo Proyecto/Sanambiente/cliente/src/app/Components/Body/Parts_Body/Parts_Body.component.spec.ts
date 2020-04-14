import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartsBodyComponent } from './Parts_Body.component';

describe('PartsBodyComponent', () => {
  let component: PartsBodyComponent;
  let fixture: ComponentFixture<PartsBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartsBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartsBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
