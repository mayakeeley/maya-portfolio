import { Component, Inject, OnInit } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import {ProjectModel} from '../../../../models/project.model';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent implements OnInit {
  public icon = faTimes;
  constructor(@Inject(MAT_DIALOG_DATA) public data: ProjectModel) {}

  ngOnInit(): void {
  }
}
