import { TestBed, inject } from '@angular/core/testing';

import { RelayScheduleService } from './relay-schedule.service';

describe('RelayScheduleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RelayScheduleService]
    });
  });

  it('should ...', inject([RelayScheduleService], (service: RelayScheduleService) => {
    expect(service).toBeTruthy();
  }));
});
