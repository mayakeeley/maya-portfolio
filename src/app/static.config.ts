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
          'Jest/Enzyme',
        ],
        image: { src: '../../../../assets/images/nology-2.png', alt: 'nology' },

        websiteUrl: 'nology.io',
        bio:
          'A front-end tech training course which takes exceptional people from a wide range of backgrounds, with no tech experience, and teaches them how to code in just 12 weeks.',
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
        image: { src: '../../../../assets/images/relay.png', alt: 'relay' },
        githubUrl: 'https://github.com/mayakeeley/relay',
        techStack: ['React', 'Typescript', 'Firebase'],
        bio: 'Female community exercise progressive web app',
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
          'Program which generates and visualises the minesweeper (uncovered) game field.',
      },
    ],
  },
  {
    title: 'Education',
    id: 'education',
    isProject: false,
    info: [
      {
        companyName: 'University of Birmingham',
        startDate: 'Sep 2014',
        endDate: 'Jul 2018',
        jobTitle: 'Liberal Arts & Sciences, Theology major BA',
        responsibilities: [
          "I graduated from the University of Birmingham in July 2018 with a first class degree in Liberal Arts & Sciences. I majored in Theology, focusing on the intersection of Islam, politics and the media. My dissertation explored the relationship between Trump's rise to power and Islamophobia in the media. Additionally, I minored in Maths where I was particularly interested in Linear Programming and Optimization. I took an entrepreneurial module in my final year where Birmingham City Council asked us to come up with a business idea to tackle the social issue of safety for residents in Birmingham. As a team of four, we produced a business plan and pitched our idea of a smart alarm system to a panel which included professionals from IBM, E-Spark and Midven.",
        ],
        activities: [
          'Valedictorian for the Class of 2018',
          "Finalist in Vice Chancellor's Challenge 2017",
          'Committee member for guildTV 2015-16',
          'Student Ambassador for Liberal Arts & Sciences',
          'Year Abroad at the University of Melbourne',
        ],
      },
    ],
  },
];
