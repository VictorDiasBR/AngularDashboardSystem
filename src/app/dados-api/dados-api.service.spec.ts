import { TestBed } from '@angular/core/testing';

import { DadosApiService } from './dados-api.service';

describe('DadosApiService', () => {
  let service: DadosApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DadosApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
