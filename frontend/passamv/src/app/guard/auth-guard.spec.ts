import { TestBed } from '@angular/core/testing';
import { CanActivateFn, Router } from '@angular/router';
import { AuthGuard } from './auth-guard';


const myRouter: Router | null = new Router();

describe('AuthGuard', () => {
  it('should create an instance', () => {
    expect(new AuthGuard(myRouter)).toBeTruthy();
  });
});
