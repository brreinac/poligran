/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CheckMoviesService } from './check-movies.service';

describe('CheckMoviesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CheckMoviesService]
    });
  });

  it('should ...', inject([CheckMoviesService], (service: CheckMoviesService) => {
    expect(service).toBeTruthy();
  }));
});
