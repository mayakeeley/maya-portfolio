import { ProjectModel } from '../../models/project.model';

export const projects: ProjectModel[] = [
  {
    projectName: 'Relay',
    image: 'relay.png',
    url: 'https://relay.mayakeeley.com',
    techStack: ['React', 'Typescript', 'Firebase Auth & DB'],
    desc: [
      'Female community exercise PWA',
      'Responsible for delivery of product',
      'Managing a team of four developers',
    ],
  },
  {
    projectName: 'Minesweeper',
    image: 'minesweeper.jpg',
    url: 'https://minesweeper.mayakeeley.com',
    techStack: ['HTML', 'CSS', 'Javascript'],
    desc: [
      'Program which generates and visualises the minesweeper (uncovered) game field.',
    ],
  },
];

export default projects;
