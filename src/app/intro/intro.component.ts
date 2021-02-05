import { Component, OnInit } from '@angular/core';
import { HeaderLinksModel } from '../../models/header-links.model';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss'],
})
export class IntroComponent implements OnInit {
  public links: HeaderLinksModel[] = [
    {
      link: 'https://github.com/mayakeeley',
      icon: faGithub,
    },
    {
      link: 'https://www.linkedin.com/in/maya-keeley-8827a215b/',
      icon: faLinkedinIn,
    },
    {
      link: 'mailto:maya.keeley@outlook.com',
      icon: faEnvelope,
    },
  ];

  constructor() {}

  public ngOnInit(): void {}
}
