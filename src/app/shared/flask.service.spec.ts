/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FlaskService } from './flask.service';

describe('Service: Flask', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FlaskService]
    });
  });

  it('should ...', inject([FlaskService], (service: FlaskService) => {
    expect(service).toBeTruthy();
  }));
});
