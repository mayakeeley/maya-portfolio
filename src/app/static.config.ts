import { SectionModel } from '../models/section.model';

export const data: SectionModel[] = [
  {
    title: 'Work Experience',
    id: 'work',
    isProject: true,
    info: [
      {
        name: 'Bot-Hive',
        startDate: 'March 2020',
        endDate: 'Present',
        jobTitle: 'Mid-level Developer',
        websiteUrl: 'bot-hive.com',
        techStack: [
          'Angular 7 & 9',
          'NGRX',
          'AWS',
          'Dynamo DB',
          'Elastic Search',
          'Node',
        ],
        bio:
          'Online b-2-b marketplace designed to make the process of getting started with Robotics & Automation technology faster and more convenient.',
        image: {
          src: '../../../../assets/images/product-gallery.png',
          alt: 'projects',
        },
      },
      {
        name: '_nology',
        startDate: 'September 2019',
        endDate: 'December 2019',
        jobTitle: 'Trainee Software Developer',
        techStack: [
          'HTML',
          'CSS/SCSS',
          'Javascript',
          'React',
          'Firebase',
          'Git/Github',
          'Jest/Enzyme',
        ],
        image: { src: '../../../../assets/images/nology-2.png', alt: 'nology' },

        websiteUrl: 'nology.io',
        bio:
          'Front-end tech training course which takes exceptional people from a wide range of backgrounds, with no tech experience, and teaches them how to code in just 12 weeks.',
      },
    ],
  },
  {
    title: 'Projects',
    id: 'projects',
    isProject: true,
    info: [
      {
        name: 'Relay',
        inProgress: true,
        image: { src: '../../../../assets/images/relay.png', alt: 'relay' },
        githubUrl: 'https://github.com/mayakeeley/relay',
        techStack: ['React', 'Typescript', 'Firebase', 'Material UI'],
        bio:
          'Progressive Web App which provides a community for women to exercise together',
      },
      {
        name: 'Minesweeper',
        image: {
          src: '../../../../assets/images/minesweeper.jpg',
          alt: 'minesweeper',
        },
        websiteUrl: 'https://minesweeper.mayakeeley.com',
        githubUrl: 'https://github.com/mayakeeley/minesweeper',
        techStack: ['HTML', 'CSS', 'Javascript'],
        bio:
          'Program which generates and visualises the minesweeper (uncovered) game field',
      },
    ],
  },
  {
    title: 'Education',
    id: 'education',
    isProject: false,
    info: [
      {
        image: 'bham.jpg',
        companyName: 'University of Birmingham',
        jobTitle: 'BA: Major - Theology; Minor - Mathematics',
        activities: [
          'First Class (Highest Honors)',
          'Valedictorian',
          'Year Abroad at the University of Melbourne',
          'Enterprise course with IBM, created an IoT smart alarm start-up',
        ],
      },
    ],
  },
];
