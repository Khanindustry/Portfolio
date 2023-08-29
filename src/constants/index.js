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
  sql,
  scss,

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
    title: 'Backend Developer',
    icon: frontend,
  },
  {
    title: 'Frontend Developer',
    icon: ux ,
  },
  {
    title: 'SQL Developer',
    icon: backend,
  },
  {
    title: 'Cybersecurity',
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

  {
    name: 'C#',
    icon: redux,
  },
  {
    name: 'ASP',
    icon: docker,
  },
  {
    name: 'PHP',
    icon: postgresql,
  },
  {
    name: 'PLaravelHP',
    icon: tailwind,
  },

  {
    name: 'Windows',
    icon: graphql,
  },
  {
    name: 'Windows',
    icon: typescript,
  },
  {
    name: 'Windows',
    icon: rubyrails,
  },
  {
    name: 'sql',
    icon: sql,
  },
  {
    name: 'scss',
    icon: scss,
  },

];

const experiences = [
  {
    title: 'Front-End Developer',
    company_name: 'HTML  CSS  Sass  Javascript  Jquery  Bootstrap',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'Sep 2021 - Dec 2021',
  },
  {
    title: 'Back-end Developer',
    company_name: 'Laravel PHP C ASP NET MVC Web API Microsoft SQL Server Flutter',
    icon: microverse,
    iconBg: '#333333',
    date: 'Jan 2022 - Apr 2022',
  },
  {
    title: 'Full Stack Developer',
    company_name: '',
    icon: kelhel,
    iconBg: '#333333',
    date: 'May 2022 - Present',
  },
  {
    title: 'Cybersecurity',
    company_name: 'CompTIA A System Administrators Network Administrator Ethical Hacker',
    icon: dcc,
    iconBg: '#333333',
    date: 'Jan 2023 - Present',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'NAM Youth',
    description: 'NAM Youth is an international youth organization website.',
    tags: [
      {
        name: 'react',
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
    image: leaderboard,
    repo: 'https://github.com/shaqdeff/KomiKult',
    demo: 'https://namyouth.org/',
  },
  {
    id: 'project-2',
    name: 'AlQazan',
    description:
      'The AlQazan site is an e-commerce site with a certain audience.',
    tags: [
      {
        name: 'react',
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
    image: komikult,
    repo: 'https://github.com/shaqdeff/Leaderboard',
    demo: 'https://alqazan.com',
  },
  {
    id: 'project-3',
    name: 'NAM Azerbaijan',
    description: 'İs the official website of the Non-Aligned Movement in Azerbaijan',
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
    repo: 'https://github.com/shaqdeff/Math-Magicians',
    demo: 'https://namazerbaijan.org/',
  },
  {
    id: 'project-4',
    name: 'Digiuth',
    description: `Digiuth is a large online learning platform in Azerbaijan.`,
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
    repo: 'https://github.com/shaqdeff/Movie-Metro',
    demo: 'https://digiuth.com/',
  },
  {
    id: 'project-5',
    name: 'ESN Azerbaijan',
    description:
      'It is the official website of Erasmus Student Network in Azerbaijan.',
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
    image: nyeusi,
    repo: 'https://github.com/shaqdeff/Nyeusi-Fest-Site',
    demo: 'https://esn.az',
  },
];

export { services, technologies, experiences, projects };
