import { TestBed } from '@angular/core/testing';

import { XtremeService } from './xtreme.service';

describe('XtremeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: XtremeService = TestBed.get(XtremeService);
    expect(service).toBeTruthy();
  });
});
