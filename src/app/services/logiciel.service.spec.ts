import { TestBed } from '@angular/core/testing';

import { LogicielService } from './logiciel.service';

describe('LogicielService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LogicielService = TestBed.get(LogicielService);
    expect(service).toBeTruthy();
  });
});
