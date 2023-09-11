import { TestBed } from '@angular/core/testing';

import { WeatherapiservicesService } from './weatherapiservices.service';

describe('WeatherapiservicesService', () => {
  let service: WeatherapiservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeatherapiservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
