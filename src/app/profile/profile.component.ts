import { Component, Input, OnInit } from '@angular/core';
import {ProfileModel} from '../../models/profile.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  @Input() public profile: ProfileModel[];
  constructor() {}

  ngOnInit(): void {}
}
