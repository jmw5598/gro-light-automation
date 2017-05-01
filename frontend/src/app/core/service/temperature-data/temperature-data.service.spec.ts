import { TestBed, inject } from '@angular/core/testing';

import { TemperatureDataService } from './temperature-data.service';

describe('TemperatureDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TemperatureDataService]
    });
  });

  it('should ...', inject([TemperatureDataService], (service: TemperatureDataService) => {
    expect(service).toBeTruthy();
  }));
});
