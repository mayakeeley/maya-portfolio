import { ProjectModel } from '../../../../models/project.model';

export const projects: ProjectModel[] = [
  {
    projectName: 'In Collaboration',
    image: 'inCollab.jpg',
    url: 'https://in-collaboration-15021.web.app/',
    techStack: 'SCSS, React, Reach Router, Firebase, Auth, Firebase Functions',
    desc:
      'Client project: I worked as part of a team of nine on a client project as part of the _nology training course. During this time we used agile principles, working in sprints with daily standups and weekly retrospectives. The concept was to create a platform for the In Collaboration community to connect on and share ideas and projects. We implemented the use of trello, user stories and paired programming. I worked in a variety of roles, running a retrospective, leading meetings with the client and on the code itself. I, and another team member, taught ourselves how to use firebase functions to send notifications to a mailing list when a post is created on the app.',
  },
  {
    projectName: 'Minesweeper',
    image: 'minesweeper.jpg',
    url: 'https://minesweeper.mayakeeley.com',
    techStack: 'HTML, CSS, Javascript',
    desc:
      '_nology brief: Build a program which generates and visualises the minesweeper (uncovered) game field. Input: 3 parameters – number of rows, number of columns, number of mines. Rules: each field is either empty, mine or number (1-8). Generate a rectangular field based on input number of rows and columns. Place mines randomly in the field – there can be only one mine in each field. Calculate the number clues and display the field. Output: simple visualisation of uncovered game board.',
  },
  {
    projectName: 'Calendar',
    image: 'calendar.jpg',
    url: 'https://calendar.mayakeeley.com',
    techStack: 'React, Google Calendar API',
    desc:
      '_nology brief: As a Keen Interpretive Dance Institute Enthusiast (KIDIE) I want to be able to see all upcoming events for the Interpretive Dance Institute (IDI) with the ability to narrow down the events to fit my interests and schedule so that I can select the events that I would like to attend.',
  },
  {
    projectName: 'Hanjie',
    image: 'hanjie.jpg',
    url: 'https://hanjie.mayakeeley.com',
    techStack: 'React',
    desc:
      'Personal interest project: I created a hanjie game using React to consolidate my knowledge of two dimensional arrays, states  and components. This project is currently a work in progress as I would like to add multiple puzzles to this application.',
  },
  {
    projectName: 'Blackbeard Quiz',
    image: 'quiz.jpg',
    url: 'https://quiz.mayakeeley.com',
    techStack: 'HTML, CSS, Javascript',
    desc:
      'Personal interest project: I created this quiz in week 3 of the _nology course. This allowed me to consolidate my knowledge of javascript, data and objects. It was later used in the _nology weekly consolidation quiz.',
  },
  {
    projectName: 'Hall of Mirrors',
    image: 'mirrors.jpg',
    url: 'https://mirrors.mayakeeley.com',
    techStack: 'React, Authentication',
    desc:
      '_nology brief: Make a react application that allows the user to login with their gmail account. When logged in, they will be shown their profile picture numerous times. Each picture shown should be modified with different angles and should be different to the other pictures. When each mirror is clicked it should toggle between a normal look and the distorted mirror look.',
  },
  {
    projectName: 'Tug of War',
    image: 'tugOfWar.jpg',
    url: 'https://tug-of-war.mayakeeley.com',
    techStack: 'HTML, CSS, Vanilla Javascript',
    desc:
      '_nology brief: Build a tug of war game. Two players should be able to play on one screen. The user that does the most actions enough times wins the tug of war. Requirements: You can reset the game to play as many times as you want without having to refresh the browser and you can see how many times each player has won.',
  },
  {
    projectName: 'Hangman',
    image: 'hangman.jpg',
    url: 'https://hangman.mayakeeley.com',
    techStack: 'HTML, CSS, Javascript',
    desc:
      'Group _nology brief: Work in a team of three to create a hangman game.',
  },
  {
    projectName: 'Online CV',
    image: 'onlineCv.jpg',
    url: 'https://blackbeard.nology.io/maya-keeley',
    techStack: 'HTML, CSS, Javascript',
    desc:
      '_nology project: During the first three weeks of the course, I built my online CV and presented my progress each week to external speakers. After two weeks on the project, I then became the product owner of my project and created user stories for other nologists to work on.',
  },
];

export default projects;
