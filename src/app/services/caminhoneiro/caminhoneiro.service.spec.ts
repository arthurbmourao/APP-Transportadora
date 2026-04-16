import { TestBed } from '@angular/core/testing';

import { CaminhoneiroService } from './caminhoneiro.service';

describe('CaminhoneiroService', () => {
  let service: CaminhoneiroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CaminhoneiroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
