import { TestBed, inject } from '@angular/core/testing';

import { MoistureSensorService } from './moisture-sensor.service';

describe('MoistureSensorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MoistureSensorService]
    });
  });

  it('should ...', inject([MoistureSensorService], (service: MoistureSensorService) => {
    expect(service).toBeTruthy();
  }));
});
