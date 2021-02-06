import { Component, OnInit } from '@angular/core';
import { NavLinksModel } from '../../models/nav-links.model';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public links: NavLinksModel[] = [
    {
      link: 'work',
      title: 'WORK',
    },
    {
      link: 'projects',
      title: 'PROJECTS',
    },
    {
      link: 'education',
      title: 'EDUCATION',
    },
  ];
  constructor(private viewportScroller: ViewportScroller) {}

  ngOnInit(): void {}

  public scrollTo(id): void {
    this.viewportScroller.setOffset([0, 88]);
    this.viewportScroller.scrollToAnchor(id);
  }
}
