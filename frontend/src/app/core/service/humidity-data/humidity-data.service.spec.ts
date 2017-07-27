import { TestBed, inject } from '@angular/core/testing';

import { HumidityDataService } from './humidity-data.service';

describe('HumidityDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HumidityDataService]
    });
  });

  it('should ...', inject([HumidityDataService], (service: HumidityDataService) => {
    expect(service).toBeTruthy();
  }));
});
