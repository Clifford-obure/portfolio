import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  rubyrails,
  graphql,
  komikult,
  leaderboard,
  math,
  movie,
  nyeusi,
  space,
  coverhunt,
  dcc,
  kelhel,
  microverse,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'UI/UX Design',
    icon: ux,
  },
  {
    title: 'Software Prototyping',
    icon: prototyping,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },

  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },

  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
];

const experiences = [
  {
    title: 'IT support specialist',
    company_name: 'Mountain fresh',
    icon: microverse,
    iconBg: '#333333',
    date: 'Dec 2020 - Jan 2021',
  },
  {
    title: 'Airtel sales person',
    company_name: 'Airtel kenya',
    icon: kelhel,
    iconBg: '#333333',
    date: 'sep 2020 - jan 2021',
  },
  {
    title: 'Full Stack Developer',
    company_name: 'ivula technologies ltd',
    icon: dcc,
    iconBg: '#333333',
    date: 'may 2022 - jan 2023',
  },
  {
    title: 'Project AI support',
    company_name: 'GAO Tek inc.',
    icon: coverhunt,
    iconBg: '#333333',
    date: ' 2021 - Feb 2022',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'comradeshub',
    description:
      'This product was to sale the online courses to students and give them scholarships at a cheaper price',
    tags: [
      {
        name: 'react, daraja api with node-js',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: komikult,
    repo: '',
    demo: 'https://254comradeshub.com',
  },
  {
    id: 'project-2',
    name: 'chafua application',
    description:
      'Students could order there food from the comfor of there rooms',
    tags: [
      {
        name: 'react-native',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: leaderboard,
    repo: '',
    demo: 'plastore chafua application',
  },
  {
    id: 'project-3',
    name: 'Ivula website',
    description: 'start up company website ',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: math,
    repo: '',
    demo: 'ivula.co.ke',
  },
  {
    id: 'project-4',
    name: 'Movie Metro',
    description: `A single-page application that allows users to search for any movie or show's ratings and its details.`,
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: movie,
    repo: '',
    demo: '',
  },
  {
    id: 'project-5',
    name: 'Nyeusi church website',
    description: 'Wesite to a local church but not yet hosted ',
    tags: [
      {
        name: 'reactjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: nyeusi,
    repo: '',
    demo: '',
  },
];

export { services, technologies, experiences, projects };
