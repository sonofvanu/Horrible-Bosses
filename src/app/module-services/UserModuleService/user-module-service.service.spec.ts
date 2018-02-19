import { TestBed, inject } from '@angular/core/testing';

import { UserModuleServiceService } from './user-module-service.service';

describe('UserModuleServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserModuleServiceService]
    });
  });

  it('should be created', inject([UserModuleServiceService], (service: UserModuleServiceService) => {
    expect(service).toBeTruthy();
  }));
});
