import { TestBed } from '@angular/core/testing';

import { CheckRoleFuncionarioGuard } from './check-role-funcionario.guard';

describe('CheckRoleFuncionarioGuard', () => {
  let guard: CheckRoleFuncionarioGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CheckRoleFuncionarioGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
