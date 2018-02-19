import { TestBed, inject } from '@angular/core/testing';

import { CircleModuleServiceService } from './circle-module-service.service';

describe('CircleModuleServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CircleModuleServiceService]
    });
  });

  it('should be created', inject([CircleModuleServiceService], (service: CircleModuleServiceService) => {
    expect(service).toBeTruthy();
  }));
});
