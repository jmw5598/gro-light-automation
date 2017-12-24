import { TestBed, inject } from '@angular/core/testing';

import { ProximitySensorService } from './proximity-sensor.service';

describe('ProximitySensorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProximitySensorService]
    });
  });

  it('should ...', inject([ProximitySensorService], (service: ProximitySensorService) => {
    expect(service).toBeTruthy();
  }));
});
