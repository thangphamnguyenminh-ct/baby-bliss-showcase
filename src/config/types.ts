export type Image = {
  img_id: string;
  alt: string;
};

export type Cta = {
  cta1: string;
  cta2: string;
};

export type Hero = {
  image: Image;
  title: string;
  subtitle: string;
} & Cta;

export type Feature = {
  title: string;
  text: string;
  image: Image;
};

export type About = {
  title: string;
  subtitle: string;
  features: Feature[];
};

export type RecentWork = {
  title: string;
  subtitle: string;
  images: Image[];
};

export type Demo = {
  title: string;
  subtitle: string;
  cover: Image;
  gallery: Image[];
};

export type Tier = {
  key: string;
  name: string;
  price: string;
  desc: string;
  features: string[];
  highlight?: boolean;
  images: Image[];
};

export type Pricing = {
  title: string;
  subtitle: string;
  tiers: Tier[];
};

export type Review = {
  name: string;
  text: string;
  avatar: Image;
};

export type Testimonials = {
  title: string;
  subtitle: string;
  reviews: Review[];
};

export type Content = {
  hero: Hero;
  about: About;
  recentWork: RecentWork;
  demo: Demo;
  pricing: Pricing;
  testimonials: Testimonials;
};
