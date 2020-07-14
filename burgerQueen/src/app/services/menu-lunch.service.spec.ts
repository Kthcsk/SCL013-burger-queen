import { TestBed } from '@angular/core/testing';

import { MenuLunchService } from './menu-lunch.service';

describe('MenuLunchService', () => {
  let service: MenuLunchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenuLunchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
