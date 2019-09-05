import { TestBed } from '@angular/core/testing';

import { PokequizService } from './pokequiz.service';

describe('PokequizService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PokequizService = TestBed.get(PokequizService);
    expect(service).toBeTruthy();
  });
});
