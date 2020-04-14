import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RanksBodyComponent } from './Ranks_Body.component';

describe('RankBodyComponent', () => {
  let component: RanksBodyComponent;
  let fixture: ComponentFixture<RanksBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RanksBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RanksBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
