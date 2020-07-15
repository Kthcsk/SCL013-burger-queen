import { TestBed } from '@angular/core/testing';

import { MenuAppetizersService } from './menu-appetizers.service';

describe('MenuAppetizersService', () => {
  let service: MenuAppetizersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenuAppetizersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
