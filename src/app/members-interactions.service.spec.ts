import { TestBed, inject } from '@angular/core/testing';

import { MembersInteractionsService } from './members-interactions.service';

describe('MembersInteractionsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MembersInteractionsService]
    });
  });

  it('should be created', inject([MembersInteractionsService], (service: MembersInteractionsService) => {
    expect(service).toBeTruthy();
  }));
});
