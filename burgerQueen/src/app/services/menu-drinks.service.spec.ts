import { TestBed } from '@angular/core/testing';

import { MenuDrinksService } from './menu-drinks.service';

describe('MenuDrinksService', () => {
  let service: MenuDrinksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenuDrinksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
