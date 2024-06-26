import { TestBed } from '@angular/core/testing';

import { LoggedAsAdminService } from './logged-as-admin.service';

describe('LoggedAsAdminService', () => {
  let service: LoggedAsAdminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoggedAsAdminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
