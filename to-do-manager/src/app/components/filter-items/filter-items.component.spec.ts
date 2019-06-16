import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterItems } from './filter-items.component';

describe('FilterItems', () => {
  let component: FilterItems;
  let fixture: ComponentFixture<FilterItems>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterItems ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterItems);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
