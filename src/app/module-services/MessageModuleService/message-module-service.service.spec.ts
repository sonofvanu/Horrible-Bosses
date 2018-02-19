import { TestBed, inject } from '@angular/core/testing';

import { MessageModuleServiceService } from './message-module-service.service';

describe('MessageModuleServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MessageModuleServiceService]
    });
  });

  it('should be created', inject([MessageModuleServiceService], (service: MessageModuleServiceService) => {
    expect(service).toBeTruthy();
  }));
});
