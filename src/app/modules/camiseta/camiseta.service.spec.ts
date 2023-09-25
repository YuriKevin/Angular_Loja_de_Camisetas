import { TestBed } from '@angular/core/testing';

import { CamisetaService } from './camiseta.service';

describe('CamisetaService', () => {
  let service: CamisetaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CamisetaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
