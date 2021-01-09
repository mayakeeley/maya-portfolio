import { Component, OnInit } from '@angular/core';
import { profile } from './static.config';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  public profile = profile;
  constructor() {}

  ngOnInit(): void {}
}
