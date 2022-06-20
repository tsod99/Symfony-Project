import { TestBed } from '@angular/core/testing';

import { BookGuard } from './book.guard';

describe('BookGuard', () => {
  let guard: BookGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(BookGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
