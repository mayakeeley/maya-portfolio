import { Component, OnInit } from '@angular/core';
import projects from './static.config';
import { ProjectModel } from '../../models/project.model';
import { MatDialog } from '@angular/material/dialog';
import { ProjectComponent } from '../project/project.component';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  public projects: ProjectModel[] = projects;
  constructor(public dialog: MatDialog) {}

  public ngOnInit(): void {}

  public openDialog(project): void {
    const dialogRef = this.dialog.open(ProjectComponent, { data: project });
  }
}
