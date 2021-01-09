import { Component, OnInit } from '@angular/core';
import { interests } from './static.config';

@Component({
  selector: 'app-interests',
  templateUrl: './interests.component.html',
  styleUrls: ['./interests.component.scss'],
})
export class InterestsComponent implements OnInit {
  public interests = interests;
  constructor() {}

  ngOnInit(): void {}
}
