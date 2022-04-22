import { TestBed } from '@angular/core/testing';

import { CheckRoleAprendizGuard } from './check-role-aprendiz.guard';

describe('CheckRoleAprendizGuard', () => {
  let guard: CheckRoleAprendizGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CheckRoleAprendizGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
