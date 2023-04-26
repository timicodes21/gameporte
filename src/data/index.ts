export interface ILink {
  src: string;
  width: number;
  height: number;
  link: string;
}

export const socialMediaLinks: ILink[] = [
  {
    src: '/assets/icons/discord_icon.svg',
    width: 40,
    height: 45,
    link: 'https://discord.gg/9FmPYHB7',
  },
  {
    src: '/assets/icons/twitter_icon.svg',
    width: 32,
    height: 27,
    link: 'https://twitter.com/gameporte',
  },
  {
    src: '/assets/icons/instagram_icon.svg',
    width: 33,
    height: 33,
    link: 'https://instagram.com/gameporte?igshid=YmMyMTA2M2Y=',
  },
  {
    src: '/assets/icons/facebook_icon.svg',
    width: 30,
    height: 30,
    link: 'https://www.facebook.com/gameporte',
  },
  {
    src: '/assets/icons/youtube_icon.svg',
    width: 33,
    height: 24,
    link: 'https://youtube.com/channel/UCoD1MdZ_SZVGakXIJ3WlSEA',
  },
];

interface ICaroselImage {
  src: string;
  title: string;
  title2?: string;
  description: string;
  noButton?: boolean;
}

export const CaroselImages: ICaroselImage[] = [
  // '/assets/images/topup_background_2.svg',
  // '/assets/images/topup_background_3.svg',
  {
    src: '/assets/images/topup_background.svg',
    title: 'Top up Game vouchers on Porte shop ',
    title2: ' ',
    description: '',
    noButton: true,
  },
  {
    src: '/assets/images/topup_background_2.svg',
    title: 'Network with other gamer ',

    description:
      'Take your passion for gaming to another level by earning cash and crypto playing the games you love.',
  },
  {
    src: '/assets/images/topup_background_3.svg',
    title: 'Get rewarded playing ',
    title2: ' your favorite games',
    description:
      'Take your passion for gaming to another level by earning cash and crypto playing the games you love.',
  },
];

export const faqImage: string = '/assets/images/faq_icon.svg';
