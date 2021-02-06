import { Component, Input, OnInit } from '@angular/core';
import { SectionModel } from '../../models/section.model';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss'],
})
export class SectionComponent implements OnInit {
  @Input() public data: SectionModel;
  constructor() {}

  ngOnInit(): void {}
}
