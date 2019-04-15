import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DayModeComponent } from './day-mode.component';

describe('DayModeComponent', () => {
  let component: DayModeComponent;
  let fixture: ComponentFixture<DayModeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DayModeComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DayModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
