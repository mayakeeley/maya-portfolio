import { Component, OnInit } from '@angular/core';
import { workExp } from './static.config';

@Component({
  selector: 'app-work-exp',
  templateUrl: './work-exp.component.html',
  styleUrls: ['./work-exp.component.scss'],
})
export class WorkExpComponent implements OnInit {
  public workExp = workExp;
  constructor() {}

  ngOnInit(): void {}
}
