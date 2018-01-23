import { TestBed, inject } from '@angular/core/testing';

import { RpiService } from './rpi.service';

describe('RpiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RpiService]
    });
  });

  it('should ...', inject([RpiService], (service: RpiService) => {
    expect(service).toBeTruthy();
  }));
});
