import {Component, Input, OnInit} from '@angular/core';
import { ProjectModel } from '../../models/project.model';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  @Input() public projects: ProjectModel[];
  constructor(public dialog: MatDialog) {}

  public ngOnInit(): void {}
}
