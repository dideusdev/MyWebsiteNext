// type
export interface Page {
  title?: string;
  description?: string;
}

export interface Pages {
  [key: string]: Page;
}

const pages: Pages = {
  home: {
    title: 'DiDeus Dev',
    description:
      'Desenvolvendo websites e lojas virtuais',
  },
  projects: {
    title: 'Projetos',
    description:
      'Você pode ver meus projetos recentes.',
  },
  hireMe: {
    title: 'Fale Comigo',
    description:
      'Estou disponivel para freelancers.',
  },
};

export default pages;
