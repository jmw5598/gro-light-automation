import { TestBed, inject } from '@angular/core/testing';

import { RpiPinService } from './rpi-pin.service';

describe('RpiPinService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RpiPinService]
    });
  });

  it('should ...', inject([RpiPinService], (service: RpiPinService) => {
    expect(service).toBeTruthy();
  }));
});
