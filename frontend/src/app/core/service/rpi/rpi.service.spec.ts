import { TestBed, inject } from '@angular/core/testing';

import { RPiService } from './rpi.service';

describe('RpiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RPiService]
    });
  });

  it('should ...', inject([RPiService], (service: RPiService) => {
    expect(service).toBeTruthy();
  }));
});
