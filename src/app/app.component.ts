import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import {data} from './static.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public sections = data;
  title = `Maya's portfolio`;

  public constructor(private titleService: Title) {}

  public ngOnInit(): void {
    this.setTitle(this.title);
  }

  public setTitle(newTitle: string): void {
    this.titleService.setTitle(newTitle);
  }
}
