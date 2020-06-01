import { TestBed } from '@angular/core/testing';

import { QcmService } from './qcm.service';

describe('QcmService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QcmService = TestBed.get(QcmService);
    expect(service).toBeTruthy();
  });
});
