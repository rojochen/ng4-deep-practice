import { TestBed, inject } from '@angular/core/testing';

import { LifeCycleSvcService } from './life-cycle-svc.service';

describe('LifeCycleSvcService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LifeCycleSvcService]
    });
  });

  it('should be created', inject([LifeCycleSvcService], (service: LifeCycleSvcService) => {
    expect(service).toBeTruthy();
  }));
});
