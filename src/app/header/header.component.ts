import { Component, OnInit } from '@angular/core';
import { NavLinksModel } from '../../models/nav-links.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public links: NavLinksModel[] = [
    {
      link: '#work',
      title: 'WORK',
    },
    {
      link: '#projects',
      title: 'PROJECTS',
    },
    {
      link: '#education',
      title: 'EDUCATION',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
