import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { UserProjectsComponent } from './components/user-projects/user-projects/user-projects.component';
import { HomeComponent } from './shared/shared-components/home/home.component';
import { loggedGuardGuard } from './services/guards/logged-guard.guard';
import { preLoggedGuardGuard } from './services/guards/pre-logged-guard.guard';
import { UserScheduleComponent } from './components/user-schedule/user-schedule/user-schedule.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [preLoggedGuardGuard] },
  {
    path: '', component: HomeComponent, canActivate: [loggedGuardGuard],
    children: [
      { path: 'projects', component: UserProjectsComponent },
      { path: 'schedule', component: UserScheduleComponent }
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
