import { TestBed } from '@angular/core/testing';

import { FilterService } from './filter-service.service';

describe('FilterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FilterService = TestBed.get(FilterService);
    expect(service).toBeTruthy();
  });
});
