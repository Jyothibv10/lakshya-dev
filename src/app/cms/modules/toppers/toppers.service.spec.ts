import { TestBed } from '@angular/core/testing';

import { ToppersService } from './toppers.service';

describe('ToppersService', () => {
  let service: ToppersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToppersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
