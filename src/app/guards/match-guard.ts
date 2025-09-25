// src/app/guards/auth.can-match.ts
import { CanMatchFn, Route, UrlSegment, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../services/core/auth-service';

export const authCanMatch: CanMatchFn = (
  route: Route,
  segments: UrlSegment[]) => {
  
  const auth = inject(AuthService);
  const router = inject(Router);

  if (auth.isLoggedIn) {
    // Permite que la ruta haga match
    return true;
  }

  // Bloquea el match y redirige (por ejemplo, a /login)
  router.navigateByUrl('/login-v2');
  return false;
};
