import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GmtBodyComponent } from './Gmt_Body.component';

describe('GmtBodyComponent', () => {
  let component: GmtBodyComponent;
  let fixture: ComponentFixture<GmtBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GmtBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GmtBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
