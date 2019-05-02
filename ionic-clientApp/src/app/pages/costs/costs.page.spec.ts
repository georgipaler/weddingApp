import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CostsPage } from './costs.page';

describe('CostsPage', () => {
  let component: CostsPage;
  let fixture: ComponentFixture<CostsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CostsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CostsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
