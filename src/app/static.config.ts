import { SectionModel } from '../models/section.model';

export const data: SectionModel[] = [
  {
    title: 'Projects',
    id: 'projects',
    isProject: true,
    info: [
      {
        name: 'Data4Living',
        image: {
          src: '../../../../assets/images/data4living.png',
          alt: 'Data4Living',
        },
        websiteUrl: 'app.data4living.com',
        techStack: ['Vue', 'Django', 'PostgreSQL', 'Heroku', 'Stripe'],
        bio:
          'Data4Living simplifies your document management and helps prepare your documents to complete significant life events.',
      },
      {
        name: 'Equati',
        image: {
          src: '../../../../assets/images/equati.png',
          alt: 'Equati',
        },
        websiteUrl: 'app.equati.ai',
        techStack: ['Vue', 'Django', 'PostgreSQL', 'Heroku'],
        bio:
          'Equati is an innovative wealth management platform, enabling Family Offices to align their values.',
      },
      {
        name: 'Project Basta',
        image: {
          src: '../../../../assets/images/projectBasta.png',
          alt: 'Project Basta',
        },
        websiteUrl: 'seekr.projectbasta.com',
        techStack: [
          'React',
          'Django',
          'GraphQL',
          'PostgreSQL',
          'Heroku',
          'Airtable',
          'MongoDB',
          'GSheets',
        ],
        bio:
          'Basta is bridging the employment gap and building careers for first generation students through award winning technology and robust employer partnerships.',
      },
      {
        name: 'El Camino Travel',
        image: {
          src: '../../../../assets/images/elCamino.png',
          alt: 'El Camino',
        },
        websiteUrl: 'www.elcamino.travel',
        techStack: [
          'Vue',
          'Django',
          'PostgreSQL',
          'Heroku',
          'Stripe',
          'Checkfront',
        ],
        bio: `Get exclusive access to high-quality immersive recommendations and experiences from the world's top hospitality experts.`,
      },
      {
        name: 'Keep Company',
        image: {
          src: '../../../../assets/images/keepCompany.png',
          alt: 'Keep Company',
        },
        websiteUrl: 'www.keep-company.com',
        techStack: ['Vue', 'Django', 'PostgreSQL', 'Heroku'],
        bio: 'Keep Company is a coaching community for parents & caregivers.',
      },
      {
        name: 'SchoolHouse Connection',
        image: {
          src: '../../../../assets/images/schoolhouseConnection.png',
          alt: 'SchoolHouse',
        },
        websiteUrl: 'schoolhouseconnection.org/',
        techStack: ['Vue', 'Django', 'PostgreSQL', 'Heroku'],
        bio: `The nation's leading expert on early care and education of youth experiencing homelessness.`,
      },
      {
        name: 'Network For Good',
        image: {
          src: '../../../../assets/images/networkForGood.png',
          alt: 'NFG',
        },
        websiteUrl: 'www.nfggive.org',
        techStack: ['React', 'Angular', 'Node', 'MongoDB', 'Jenkins'],
        bio:
          'Network for Good is a 501(c)(3) charity that operates a technology-enabled donor advised fund which enables donors to raise and direct funds to their favorite charities.',
      },
      {
        name: 'ReWyre',
        image: {
          src: '../../../../assets/images/rewyre.png',
          alt: 'ReWyre',
        },
        websiteUrl: 'www.rewyre.com',
        techStack: [
          'Vue',
          'Django',
          'PostgreSQL',
          'Heroku',
          'Autodesk',
          'Stripe',
        ],
        bio:
          'ReWyre is a commercial RFP and marketplace platform designed to drive new property solutions seamlessly through your portfolio.',
      },
      {
        name: 'Grant Circles',
        image: {
          src: '../../../../assets/images/canary.png',
          alt: 'Canary',
        },
        websiteUrl: 'thegivingtree.grantcircles.org',
        techStack: [
          'Vue',
          'Django',
          'PostgreSQL',
          'Heroku',
          'Stripe',
          'Twilio',
        ],
        bio:
          'The Grant Circle is a pool of funds for and funded by The Giving Tree community to support each other during financial emergencies.',
      },
      {
        name: 'Movie Recommender',
        image: {
          src: '../../../../assets/images/movie-recommender.png',
          alt: 'movie recommender',
        },
        websiteUrl: 'movie-recommender.mayakeeley.com',
        githubUrl: 'github.com/mayakeeley/movie-recommender',
        techStack: ['Angular 11', 'SCSS', 'NGRX'],
        bio:
          "Program which suggests movies to watch based on user's favourite films",
      },
    ],
  },
  {
    title: 'Work',
    id: 'work',
    isProject: true,
    info: [
      {
        name: 'ThinkNimble',
        startDate: 'April 2021',
        endDate: 'Present',
        jobTitle: 'Lead Software Engineer',
        websiteUrl: 'thinknimble.com',
        techStack: [
          'Vue',
          'Django',
          'Javascript',
          'Python',
          'Postgres',
          'Heroku',
        ],
        bio:
          'Software Development Agency working with a range of non-profit and start-up clients from seed stage to series A.',
        image: {
          src: '../../../../assets/images/thinknimble.png',
          alt: 'thinknimble',
        },
      },
      {
        name: 'Bot-Hive',
        startDate: 'March 2020',
        endDate: 'April 2021',
        jobTitle: 'Software Developer',
        websiteUrl: 'bot-hive.com',
        techStack: [
          'Angular 9 & 11',
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
          alt: 'bot-hive',
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
