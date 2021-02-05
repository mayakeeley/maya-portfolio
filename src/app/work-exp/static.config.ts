import { WorkExpModel } from '../../models/work-exp.model';

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
      'Bot-Hive is a new online platform designed to make the process of getting started with Robotics & Automation technology faster and more convenient.',
    responsibilities: [
      'Helped build the first version of a website for an early-stage robotics marketplace start-up',
      'Responsible for the delivery of the Robot Matchmaker tool where users find robot solutions based on conditional questions',
      'Help lead product development strategy',
      'Manage a junior developer; manage workload, support learning, review pull requests and conduct regular performance reviews',
    ],
    images: [
      {
        src: '../../../../assets/images/product-gallery.png',
        alt: 'projects',
      },
      { src: '../../../../assets/images/matchmaker.png', alt: 'matchmaker' },
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
