import { TestBed } from '@angular/core/testing';

import { boardService } from './board.service';

describe('BoardService', () => {
  let service: boardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(boardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
