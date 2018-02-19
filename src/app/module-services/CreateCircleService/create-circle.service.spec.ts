import { TestBed, inject } from '@angular/core/testing';

import { CreateCircleService } from './create-circle.service';

describe('CreateCircleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CreateCircleService]
    });
  });

  it('should be created', inject([CreateCircleService], (service: CreateCircleService) => {
    expect(service).toBeTruthy();
  }));
});
