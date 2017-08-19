import { TestBed, inject } from '@angular/core/testing';

import { DashboardBuilderService } from './dashboard-builder.service';

describe('DashboardBuilderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DashboardBuilderService]
    });
  });

  it('should ...', inject([DashboardBuilderService], (service: DashboardBuilderService) => {
    expect(service).toBeTruthy();
  }));
});
