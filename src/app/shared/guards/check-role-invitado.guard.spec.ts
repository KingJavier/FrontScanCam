import { TestBed } from '@angular/core/testing';

import { CheckRoleInvitadoGuard } from './check-role-invitado.guard';

describe('CheckRoleInvitadoGuard', () => {
  let guard: CheckRoleInvitadoGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CheckRoleInvitadoGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
