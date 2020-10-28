import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { HeaderLinksModel } from '../../models/header-links.model';

export const links: HeaderLinksModel[] = [
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
