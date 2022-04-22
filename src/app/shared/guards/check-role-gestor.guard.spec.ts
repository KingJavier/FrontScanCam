import { TestBed } from '@angular/core/testing';

import { CheckRoleGestorGuard } from './check-role-gestor.guard';

describe('CheckRoleGestorGuard', () => {
  let guard: CheckRoleGestorGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CheckRoleGestorGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
