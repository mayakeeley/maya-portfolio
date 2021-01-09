import { ProjectModel } from '../../../../models/project.model';

export const projects: ProjectModel[] = [
  {
    projectName: 'In Collaboration',
    image: 'inCollab.jpg',
    url: 'https://in-collaboration-15021.web.app/',
    techStack: [
      'SCSS',
      'React',
      'Reach Router',
      'Firebase',
      'Auth',
      'Firebase Functions',
    ],
    desc:
      'Client project: I worked as part of a team of nine on a client project as part of the _nology training course. During this time we used agile principles, working in sprints with daily standups and weekly retrospectives. The concept was to create a platform for the In Collaboration community to connect on and share ideas and projects. We implemented the use of trello, user stories and paired programming. I worked in a variety of roles, running a retrospective, leading meetings with the client and on the code itself. I, and another team member, taught ourselves how to use firebase functions to send notifications to a mailing list when a post is created on the app.',
  },
  {
    projectName: 'Minesweeper',
    image: 'minesweeper.jpg',
    url: 'https://minesweeper.mayakeeley.com',
    techStack: ['HTML', 'CSS', 'Javascript'],
    desc:
      '_nology brief: Build a program which generates and visualises the minesweeper (uncovered) game field. Input: 3 parameters – number of rows, number of columns, number of mines. Rules: each field is either empty, mine or number (1-8). Generate a rectangular field based on input number of rows and columns. Place mines randomly in the field – there can be only one mine in each field. Calculate the number clues and display the field. Output: simple visualisation of uncovered game board.',
  },
  {
    projectName: 'Calendar',
    image: 'calendar.jpg',
    url: 'https://calendar.mayakeeley.com',
    techStack: ['React', 'Google Calendar API'],
    desc:
      '_nology brief: As a Keen Interpretive Dance Institute Enthusiast (KIDIE) I want to be able to see all upcoming events for the Interpretive Dance Institute (IDI) with the ability to narrow down the events to fit my interests and schedule so that I can select the events that I would like to attend.',
  },
];

export default projects;
