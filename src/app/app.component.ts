import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = `Maya's portfolio`;

  public constructor(private titleService: Title) {}

  public ngOnInit(): void {
    this.setTitle(this.title);
  }

  public setTitle(newTitle: string): void {
    this.titleService.setTitle(newTitle);
  }
}
