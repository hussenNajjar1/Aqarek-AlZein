export type Property = {
  id: string;
  title: string;
  category?: string;
  location: string;
  price: number;
  type: string,
  image: string;
  images: string[];
  beds: number;
  baths: number;
  area: number;
  description: string;
  features: string[];
  yearBuilt: number;
  parking: boolean;
  furnished: boolean;
  coordinates: {
    lat: number;
    lng: number;
  };
};

export type Filters = {
  type: string;
  category: string;
  location: string;
  maxPrice: string;
};
