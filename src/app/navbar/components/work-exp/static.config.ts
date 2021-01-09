import { WorkExpModel } from '../../../../models/work-exp.model';

export const workExp: WorkExpModel[] = [
  {
    companyName: 'Bot-Hive',
    startDate: 'Mar 2020',
    endDate: 'Present',
    jobTitle: 'Mid-level Developer',
    website: 'bot-hive.com',
    techStack: [
      'Angular 7 & 9',
      'NGRX',
      'AWS',
      'Dynamo DB',
      'Elastic Search',
      'Node',
    ],
    productDescription:
      'Bot-Hive is a new online platform designed to make the process of getting started with Robotics & Automation technology, faster and more conveniently.',
    responsibilities: [
      'While in this role I have learned many new technologies, in particular Angular. I worked directly with the CTO to build the first version of the product. I took a lead role in the product development strategy as well as working with the CEO to translate this strategy into user stories.',
      'Additionally, I took on the sole responsibility of delivering the front-end of the Robot Matchmaker tool. This tool allowed the content team to create a question tree that would then be translated into the front-end where a user would be able to find a suitable robot for the task they wanted to automate.',
      'I worked my way up from junior to mid-level while at this company within 9 months and have managed a junior developer for 6 months. This involves managing his workload, supporting his learning, reviewing pull requests and holding regular performance reviews.',
    ],
    images: [
      {
        src: '../../../../assets/images/bot-hive-projects.png',
        alt: 'projects',
      },
      { src: '../../../../assets/images/bot-hive-rm.png', alt: 'matchmaker' },
    ],
  },
  {
    companyName: '_nology',
    startDate: 'Sep 2019',
    endDate: 'Dec 2019',
    jobTitle: 'Trainee Software Developer',
    techStack: [
      'HTML',
      'CSS',
      'Javascript',
      'React',
      'Firebase (Auth, Databases, Hosting, Functions)',
      'Git/Github',
      'Jest/Enzyme',
      'Agile',
    ],
    responsibilities: [
      'I trained with _nology as part of a 12-week intensive front-end Software Development course. I have taken leadership opportunities throughout, such as running a retrospective session, leading meetings for a client project and have won several awards on the course, including ‘Most Valuable Programmer’ and the ‘Product’ award. I am keen to continue learning and developing beyond the course to widen my knowledge of tech and coding languages.',
    ],
    images: [
      { src: '../../../../assets/images/nology-1.png', alt: 'nology' },
      { src: '../../../../assets/images/nology-2.png', alt: 'nology' },
    ],
    website: 'nology.io',
    productDescription:
      'A front-end tech training course which takes exceptional people from a wide range of backgrounds, with no tech experience, and teaches them how to code in just 12 weeks.',
  },
];
