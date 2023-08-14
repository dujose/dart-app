import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { MaterialSharedModule } from './shared/modules/material-shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { LoaderComponent } from './shared/layout/loader/loader/loader.component';
import { HttpClientModule} from '@angular/common/http';
import { UserProjectsComponent } from './components/user-projects/user-projects/user-projects.component';
import { HomeComponent } from './shared/shared-components/home/home.component';
import { UserScheduleComponent } from './components/user-schedule/user-schedule/user-schedule.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    LoaderComponent,
    UserProjectsComponent,
    UserScheduleComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialSharedModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
