import { TestBed, inject } from '@angular/core/testing';

import { RPiComponentService } from './rpicomponent.service';

describe('RPiComponentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RPiComponentService]
    });
  });

  it('should ...', inject([RPiComponentService], (service: RPiComponentService) => {
    expect(service).toBeTruthy();
  }));
});
