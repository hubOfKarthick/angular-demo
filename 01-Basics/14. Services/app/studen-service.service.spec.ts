import { TestBed, inject } from '@angular/core/testing';

import { StudenServiceService } from './studen-service.service';

describe('StudenServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StudenServiceService]
    });
  });

  it('should be created', inject([StudenServiceService], (service: StudenServiceService) => {
    expect(service).toBeTruthy();
  }));
});
