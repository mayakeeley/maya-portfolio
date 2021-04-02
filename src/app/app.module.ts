import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { IntroComponent } from './intro/intro.component';
import { HeaderComponent } from './header/header.component';
import { SectionComponent } from './section/section.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProfileComponent } from './profile/profile.component';
import { CommonModule } from '@angular/common';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    HeaderComponent,
    SectionComponent,
    ProjectsComponent,
    ProfileComponent,
  ],
    imports: [
        BrowserModule,
        CommonModule,
        FontAwesomeModule,
        NoopAnimationsModule,
        MatDialogModule,
        MatIconModule,
    ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ProfileComponent, ProjectsComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
