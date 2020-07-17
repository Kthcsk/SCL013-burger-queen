import { TestBed } from '@angular/core/testing';

import { SumtotalService } from './sumtotal.service';

describe('SumtotalService', () => {
  let service: SumtotalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SumtotalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
