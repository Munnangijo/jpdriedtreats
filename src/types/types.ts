export interface Product {
  id: number;
  name: string;
  shortDescription: string;
  description: string;
  applications: string[];
  image: string;
  slug: string;
}

export interface USP {
  id: number;
  title: string;
  description: string;
  icon: string;
}