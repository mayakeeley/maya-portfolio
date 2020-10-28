import { Component, OnInit } from '@angular/core';
import {links} from './static.config';
import {HeaderLinksModel} from '../../models/header-links.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public links: HeaderLinksModel[] = links;
  constructor() { }

  ngOnInit(): void {
  }

}
