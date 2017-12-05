import { TestBed, inject } from '@angular/core/testing';

import { RPiPinService } from './rpi-pin.service';

describe('RPiPinService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RPiPinService]
    });
  });

  it('should ...', inject([RPiPinService], (service: RPiPinService) => {
    expect(service).toBeTruthy();
  }));
});
