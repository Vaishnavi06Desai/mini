import { TestBed } from '@angular/core/testing';

import { TestInterfaceService } from './test-interface.service';

describe('TestInterfaceService', () => {
  let service: TestInterfaceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestInterfaceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
