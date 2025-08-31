import { TestBed } from '@angular/core/testing';

import { ShowColServiceService } from './column-state.service';

describe('ShowColServiceService', () => {
  let service: ShowColServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowColServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
