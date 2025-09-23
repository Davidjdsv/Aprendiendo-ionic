import { CanMatchFn, Router } from '@angular/router';
import { AuthService } from '../services/core/auth-service';
import { inject } from '@angular/core';

export const matchGuard: CanMatchFn = (route, segments) => {
  return true;
};
