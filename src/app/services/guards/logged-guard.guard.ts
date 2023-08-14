import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService} from 'src/app/services/auth.service';

export const loggedGuardGuard: CanActivateFn = (route, state) => {
  const oauthService: AuthService = inject(AuthService);
  const router: Router = inject(Router);
  if (oauthService.isLogged) {
    return true;
  }

  router.navigate(['login']);
  return false;

};


