import { TestBed } from '@angular/core/testing';

import { StuservicesService } from './stuservices.service';

describe('StuservicesService', () => {
  let service: StuservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StuservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
