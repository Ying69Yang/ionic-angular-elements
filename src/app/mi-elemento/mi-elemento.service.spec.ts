import { TestBed } from '@angular/core/testing';

import { MiElementoService } from './mi-elemento.service';

describe('MiElementoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MiElementoService = TestBed.get(MiElementoService);
    expect(service).toBeTruthy();
  });
});
