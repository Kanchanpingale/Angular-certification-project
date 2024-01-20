import { TestBed } from '@angular/core/testing';

import { Step1ResolverServiceTsService } from '../step2/step1-resolver.service.ts.service';

describe('Step1ResolverServiceTsService', () => {
  let service: Step1ResolverServiceTsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Step1ResolverServiceTsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
