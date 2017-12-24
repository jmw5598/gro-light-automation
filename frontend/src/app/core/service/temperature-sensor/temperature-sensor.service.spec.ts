import { TestBed, inject } from '@angular/core/testing';

import { TemperatureSensorService } from './temperature-sensor.service';

describe('TemperatureSensorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TemperatureSensorService]
    });
  });

  it('should ...', inject([TemperatureSensorService], (service: TemperatureSensorService) => {
    expect(service).toBeTruthy();
  }));
});
