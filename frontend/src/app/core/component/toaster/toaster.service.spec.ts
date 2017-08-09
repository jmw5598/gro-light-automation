import { TestBed, inject } from '@angular/core/testing';

import { ToasterService } from './toaster.service';

describe('ToasterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ToasterService]
    });
  });

  it('should ...', inject([ToasterService], (service: ToasterService) => {
    expect(service).toBeTruthy();
  }));
});
