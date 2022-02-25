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
    title: 'Books Hostel - Landing Page',
    images: [
      {
        alt: 'woman in white tank top wearing silver necklace',
        width: 1280,
        height: 1828,
        likes: 42,
        src: '/projects/bride/books_hostel_desktop.jpg',
      },
      {
        alt: 'woman in white wedding dress standing on stairs',
        width: 1280,
        height: 1828,
        likes: 59,
        src: '/projects/bride/books_hostel_mobile.jpg',
      },
      {
        alt: 'woman in white sleeveless top wearing silver necklace',
        width: 1280,
        height: 1828,
        likes: 34,
        src: '/projects/bride/books_hostel_tablet.jpg',
      },
    ],
  }),
  ProjectConstructor({
    category: ['design'],
    date: dayjs().subtract(4, 'week'),
    id: 'hairmaskdesign',
    postFileName: 'bridephotoshoot',
    title: 'Hair mask box design',
    images: [
      {
        alt: 'White and green labeled soft hair mask tube',
        height: 3903,
        likes: 29,
        src: '/projects/tube/glenn-claire-aYrOtqypmho-unsplash.jpg',
        width: 3741,
      },
      {
        alt: 'Black and White usb hair mask box and tube',
        height: 4000,
        likes: 38,
        src: '/projects/tube/glenn-claire-DuNXXPScbJM-unsplash.jpg',
        width: 5193,
      },
    ],
  }),
  ProjectConstructor({
    category: ['photography'],
    date: dayjs().subtract(19, 'week'),
    id: 'clothingphotoshoot',
    postFileName: 'bridephotoshoot',
    title: 'Clothing photoshot',
    images: [
      {
        alt: 'woman in pink and white polka dot crop top and blue denim shorts',
        height: 6000,
        likes: 47,
        src: '/projects/clothing/joeyy-lee-7q8omh36MYA-unsplash.jpg',
        width: 4000,
      },
      {
        alt: 'woman in pink and white floral crop top and blue denim jeans',
        height: 5897,
        likes: 51,
        src: '/projects/clothing/joeyy-lee-8Vv5H3oIGjA-unsplash.jpg',
        width: 3999,
      },
      {
        alt: 'woman in white crop top and pink blazer',
        height: 6000,
        likes: 83,
        src: '/projects/clothing/joeyy-lee-mu1v2Ayd6pI-unsplash.jpg',
        width: 4000,
      },
      {
        alt: 'woman in white spaghetti strap top and white skirt',
        height: 6000,
        likes: 96,
        src: '/projects/clothing/joeyy-lee-D_KmOD-xDk0-unsplash.jpg',
        width: 4000,
      },
      {
        alt: 'woman in black tank top and black skirt holding black leather handbag',
        height: 6000,
        likes: 69,
        src: '/projects/clothing/joeyy-lee-wZgcKvE0vko-unsplash.jpg',
        width: 4000,
      },
    ],
  }),
  ProjectConstructor({
    category: ['photography'],
    date: dayjs().subtract(24, 'week'),
    id: 'modelingphotoshoot',
    postFileName: 'bridephotoshoot',
    title: 'Modeling photoshoot',
    images: [
      {
        alt: 'woman in gray dress sitting on stairs',
        height: 4074,
        likes: 51,
        src: '/projects/modeling/joeyy-lee-sBcv_qRnZG8-unsplash.jpg',
        width: 3260,
      },
      {
        alt: 'woman in gray dress leaning on a stone column',
        height: 5878,
        likes: 66,
        src: '/projects/modeling/joeyy-lee-MEee3-vzeKc-unsplash.jpg',
        width: 3918,
      },
      {
        alt: 'woman in gray dress walking up stairs',
        height: 4074,
        likes: 89,
        src: '/projects/modeling/joeyy-lee-IhuELKvRaUU-unsplash.jpg',
        width: 3260,
      },
      {
        alt: 'woman in gray dress leaning on stair stone railing',
        height: 6000,
        likes: 89,
        src: '/projects/modeling/joeyy-lee-5CEL1FDPZiM-unsplash.jpg',
        width: 4000,
      },
    ],
  }),
  ProjectConstructor({
    category: ['design'],
    date: dayjs().subtract(8, 'month'),
    id: 'designingwaterbox',
    title: 'Box water is better',
    postFileName: 'bridephotoshoot',
    images: [
      {
        alt: 'Boxed water is Better carton with waves drawn on it with a sharpie',
        height: 3401,
        likes: 46,
        src: '/projects/boxWater/boxed-water-is-better-7mr6Yx-8WLc-unsplash.jpg',
        width: 3401,
      },
      {
        alt: 'Two female athlete holding box water in their hands',
        height: 2000,
        likes: 58,
        src: '/projects/boxWater/boxed-water-is-better-fTwAGXHfXoE-unsplash.jpg',
        width: 3000,
      },
      {
        alt: 'Four white water carton on a yellow table',
        height: 2000,
        likes: 31,
        src: '/projects/boxWater/boxed-water-is-better-rWQB4e5W5bI-unsplash.jpg',
        width: 3000,
      },
      {
        alt: 'Some white water carton on blue table',
        height: 2000,
        likes: 31,
        src: '/projects/boxWater/boxed-water-is-better-3iiyde9Zj8A-unsplash.jpg',
        width: 3000,
      },
    ],
  }),
];

export default projectsData;
