import { TestBed } from '@angular/core/testing';

import { EntryQuestionsService } from './entry-questions.service';

describe('EntryQuestionsService', () => {
  let service: EntryQuestionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EntryQuestionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
