import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GmtListComponent } from './Gmt_List.component';

describe('GmtListComponent', () => {
  let component: GmtListComponent;
  let fixture: ComponentFixture<GmtListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GmtListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GmtListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
