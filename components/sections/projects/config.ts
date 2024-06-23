import { Project } from '@/types/project';

const projects: Project[] = [
  {
    name: 'Casa Lirio',
    slug: 'casa_lirio',
    description:
      'Casa Lirio is a boutique hotel in Barcelona,s Ciutat Vella, offering modern rooms, free Wi-Fi, and easy access to major attractions.',
    thumbnail: '/images/projects/project1/casalirio.com_.png',
    liveurl: 'https://casalirio.com/'
  },
  {
    name: 'Lemar Barcelona',
    slug: 'lemar_barcelona',
    description:
      'LeMar Barcelona by Aspasios is a centrally located hotel in Eixample offering modern, spacious rooms and high-speed Wi-Fi.',
    thumbnail: '/images/projects/project2/lemarbarcelona.com_.png',
    liveurl: 'https://lemarbarcelona.com/'
  },
  {
    name: 'Cal Ruiz',
    slug: 'cal_ruiz',
    description:
      'Hotel Cal Ruiz is a family-friendly 3-star hotel in Pas de la Casa, Andorra, offering comfortable rooms, free Wi-Fi, a bar, and a restaurant.',
    thumbnail: '/images/projects/project3/calruizhotel.com_es.png',
    liveurl: 'https://calruizhotel.com/es'
  },
  {
    name: 'Andorra Terranova Hotel',
    slug: 'andorra_terranova_hotel',
    description:
      'Hotel Terranova in Pas de la Casa, Andorra, offers comfortable rooms and modern amenities just 200 meters from the Grandvalira ski slopes.',
    thumbnail: '/images/projects/project4/andorraterranovahotel.com_es.png',
    liveurl: 'https://andorraterranovahotel.com/es'
  },
  {
    name: 'Old Portfolio',
    slug: 'old_portfolio',
    description:
      'A personal portfolio to showcase your coding projects, resume, and skills in a beautifully designed format.',
    thumbnail: '/images/projects/project5/codewithxavi.vercel.app_.png',
    liveurl: 'https://codewithxavi.vercel.app/',
    githuburl: 'https://github.com/codewithxavi/FrontendQuiz'
  },
  {
    name: 'Frontend Quiz',
    slug: 'frontend_quiz',
    description:
      'A website offering interactive coding tutorials and challenges to help users learn programming languages through practice.',
    thumbnail: '/images/projects/project6/frontend-quiz-xavi.vercel.app_.png',
    liveurl: 'https://frontend-quiz-xavi.vercel.app/',
    githuburl: 'https://github.com/codewithxavi/FrontendQuiz'
  }
];

export { projects };
