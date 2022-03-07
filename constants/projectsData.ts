// dayjs
import dayjs, { Dayjs } from 'dayjs';
// type
import { ImageProps } from 'types/imageType';
import { ProjectCategory } from 'types/categoryType';

export interface ProjectDetails {
  category: ProjectCategory[];
  date: Dayjs;
  id: string;
  images: ImageProps[];
  postFileName: string;
  title: string;
}

export interface Project extends ProjectDetails {
  likes: number;
}

const ProjectConstructor = (props: ProjectDetails): Project => {
  const { category, date, id, images, postFileName, title } = props;

  return {
    category,
    date,
    id,
    title,
    images,
    postFileName,
    get likes() {
      let totalLikes = 0;
      if (this.images.length === 0) return 0;

      this.images.forEach((image) => (totalLikes += image.likes));
      return totalLikes;
    },
  };
};

const projectsData: Project[] = [
  ProjectConstructor({
    category: ['photography'],
    date: dayjs().subtract(1, 'week'),
    id: 'bookshostel',
    postFileName: 'bookshostel',
    title: 'Books Hostel',
    images: [
      {
        alt: 'mulher acessando website do Books Hostel pelo notebook',
        width: 1280,
        height: 1828,
        likes: 42,
        src: '/projects/websites/books_hostel_desktop.jpg',
      },
      {
        alt: 'mulher acessando website do Books Hostel pelo celular',
        width: 1280,
        height: 1828,
        likes: 59,
        src: '/projects/websites/books_hostel_mobile.jpg',
      },
      {
        alt: 'mulher acessando website do Books Hostel pelo tablet',
        width: 1280,
        height: 1828,
        likes: 34,
        src: '/projects/websites/books_hostel_tablet.jpg',
      },
    ],
  }),
  ProjectConstructor({
    category: ['design'],
    date: dayjs().subtract(4, 'week'),
    id: 'artediferente',
    postFileName: 'artediferente',
    title: 'Arte Diferente',
    images: [
      {
        alt: 'mulher acessando website da Arte Diferente pelo notebook',
        height: 1280,
        likes: 29,
        src: '/projects/websites/arte_diferente_desktop.jpg',
        width: 1828,
      },
      {
        alt: 'mulher acessando website da Arte Diferente pelo celular',
        height: 1280,
        likes: 38,
        src: '/projects/websites/arte_diferente_mobile.jpg',
        width: 1828,
      },
      {
        alt: 'mulher acessando website da Arte Diferente pelo tablet',
        height: 1280,
        likes: 38,
        src: '/projects/websites/arte_diferente_tablet.jpg',
        width: 1828,
      },
    ],
  }),
  ProjectConstructor({
    category: ['photography'],
    date: dayjs().subtract(19, 'week'),
    id: 'academiastillos',
    postFileName: 'academiastillos',
    title: 'Academia Stillos',
    images: [
      {
        alt: 'mulher acessando website da Academia Stillos pelo notebook',
        height: 1280,
        likes: 47,
        src: '/projects/websites/academia_stillos_desktop.jpg',
        width: 1828,
      },
      {
        alt: 'mulher acessando website da Academia Stillos pelo celular',
        height: 1280,
        likes: 51,
        src: '/projects/websites/academia_stillos_tablet.jpg',
        width: 1828,
      },
      {
        alt: 'mulher acessando website da Academia Stillos pelo tablet',
        height: 1280,
        likes: 83,
        src: '/projects/websites/academia_stillos_mobile.jpg',
        width: 1828,
      },
    ],
  }),
  ProjectConstructor({
    category: ['photography'],
    date: dayjs().subtract(24, 'week'),
    id: 'graficalitoral',
    postFileName: 'graficalitoral',
    title: 'Gráfica Litoral',
    images: [
      {
        alt: 'mulher acessando website da Gráfica Litoral pelo notebook',
        height: 1280,
        likes: 51,
        src: '/projects/websites/grafica_litoral_desktop.jpg',
        width: 1828,
      },
      {
        alt: 'mulher acessando website da Gráfica Litoral pelo celular',
        height: 1280,
        likes: 66,
        src: '/projects/websites/grafica_litoral_mobile.jpg',
        width: 1828,
      },
      {
        alt: 'mulher acessando website da Gráfica Litoral pelo tablet',
        height: 1280,
        likes: 89,
        src: '/projects/websites/grafica_litoral_tablet.jpg',
        width: 1828,
      },
    ],
  }),
  ProjectConstructor({
    category: ['design'],
    date: dayjs().subtract(8, 'month'),
    id: 'joseanelira',
    postFileName: 'joseanelira',
    title: 'Joseane Lira',
    images: [
      {
        alt: 'mulher acessando website da Joseane Lira pelo notebook',
        height: 1280,
        likes: 46,
        src: '/projects/websites/joseane_lira_desktop.jpg',
        width: 1828,
      },
      {
        alt: 'mulher acessando website da Joseane Lira pelo celular',
        height: 1280,
        likes: 58,
        src: '/projects/websites/joseane_lira_mobile.jpg',
        width: 1828,
      },
      {
        alt: 'mulher acessando website da Joseane Lira pelo tablet',
        height: 1280,
        likes: 31,
        src: '/projects/websites/joseane_lira_tablet.jpg',
        width: 1828,
      },
    ],
  }),
  ProjectConstructor({
    category: ['design'],
    date: dayjs().subtract(8, 'month'),
    id: 'recantodopontal',
    postFileName: 'recantodopontal',
    title: 'Recanto do Pontal',
    images: [
      {
        alt: 'mulher acessando website do Recanto do Pontal pelo notebook',
        height: 1280,
        likes: 98,
        src: '/projects/websites/recanto_do_pontal_desktop.jpg',
        width: 1828,
      },
      {
        alt: 'mulher acessando website do Recanto do Pontal pelo celular',
        height: 1280,
        likes: 120,
        src: '/projects/websites/recanto_do_pontal_mobile.jpg',
        width: 1828,
      },
      {
        alt: 'mulher acessando website do Recanto do Pontal pelo tablet',
        height: 1280,
        likes: 31,
        src: '/projects/websites/recanto_do_pontal_tablet.jpg',
        width: 1828,
      },
    ],
  }),
];

export default projectsData;
