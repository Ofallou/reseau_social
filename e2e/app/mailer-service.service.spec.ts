import { TestBed, inject } from '@angular/core/testing';

import { MailerServiceService } from './mailer-service.service';

describe('MailerServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MailerServiceService]
    });
  });

  it('should be created', inject([MailerServiceService], (service: MailerServiceService) => {
    expect(service).toBeTruthy();
  }));
});
