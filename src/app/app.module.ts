import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IntroComponent } from './intro/intro.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule, Routes } from '@angular/router';

import { WorkExpComponent } from './navbar/components/work-exp/work-exp.component';
import { ProjectsComponent } from './navbar/components/projects/projects.component';
import { ProfileComponent } from './navbar/components/profile/profile.component';
import { InterestsComponent } from './navbar/components/interests/interests.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { ProjectComponent } from './navbar/components/project/project.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

export const ROUTES: Routes = [
  { path: '', redirectTo: 'work-exp', pathMatch: 'full' },
  {
    path: 'work-exp',
    component: WorkExpComponent,
  },
  {
    path: 'projects',
    component: ProjectsComponent,
  },
  {
    path: 'interests',
    component: InterestsComponent,
  },
  { path: 'profile', component: ProfileComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IntroComponent,
    HeaderComponent,
    WorkExpComponent,
    ProjectsComponent,
    ProfileComponent,
    InterestsComponent,
    ProjectComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FontAwesomeModule,
    RouterModule.forChild(ROUTES),
    RouterModule.forRoot([]),
    NoopAnimationsModule,
    MatDialogModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ProjectComponent],
})
export class AppModule {}
