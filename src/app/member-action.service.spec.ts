import { TestBed, inject } from '@angular/core/testing';

import { MemberActionService } from './member-action.service';

describe('MemberActionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MemberActionService]
    });
  });

  it('should be created', inject([MemberActionService], (service: MemberActionService) => {
    expect(service).toBeTruthy();
  }));
});
