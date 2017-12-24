import { TestBed, inject } from '@angular/core/testing';

import { TemperatureHumiditySensorService } from './temperature-humidity-sensor.service';

describe('TemperatureHumiditySensorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TemperatureHumiditySensorService]
    });
  });

  it('should ...', inject([TemperatureHumiditySensorService], (service: TemperatureHumiditySensorService) => {
    expect(service).toBeTruthy();
  }));
});
