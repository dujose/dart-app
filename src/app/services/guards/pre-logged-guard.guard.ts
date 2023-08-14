import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { inject } from '@angular/core';

export const preLoggedGuardGuard: CanActivateFn = (route, state) => {
   const oauthService: AuthService = inject(AuthService);
   const router: Router = inject(Router);

  if(oauthService.isLogged) {
    router.navigate(['']);
    return false;
  }

  return true;

};
