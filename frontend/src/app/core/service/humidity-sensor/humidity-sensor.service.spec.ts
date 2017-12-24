import { TestBed, inject } from '@angular/core/testing';

import { HumiditySensorService } from './humidity-sensor.service';

describe('HumiditySensorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HumiditySensorService]
    });
  });

  it('should ...', inject([HumiditySensorService], (service: HumiditySensorService) => {
    expect(service).toBeTruthy();
  }));
});
