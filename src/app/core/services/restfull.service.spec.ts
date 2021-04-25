/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RestfullService } from './restfull.service';

describe('Service: Restfull', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RestfullService]
    });
  });

  it('should ...', inject([RestfullService], (service: RestfullService) => {
    expect(service).toBeTruthy();
  }));
});
