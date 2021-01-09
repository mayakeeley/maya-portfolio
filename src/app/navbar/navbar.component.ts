import { Component, OnInit } from '@angular/core';
import { faBriefcase, faCode } from '@fortawesome/free-solid-svg-icons';
import { faUser, faPalette } from '@fortawesome/free-solid-svg-icons';
import {NavLinksModel} from '../../models/nav-links.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  public links: NavLinksModel[] = [
    {
      link: '/work',
      title: 'WORK',
      icon: faBriefcase,
    },
    {
      link: '/projects',
      title: 'PROJECTS',
      icon: faCode,
    },
    {
      link: '/education',
      title: 'EDUCATION',
      icon: faUser,
    },
    {
      link: '/interests',
      title: 'INTERESTS',
      icon: faPalette,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
