export interface Stays {
  name: string;
  image: string;
  address: string;
  lodgingId: number;
  distance: string;
  rating: number;
  latitude: string;
  longitude: string;
}

interface Review {
  lodgingId: number;
  name: string;
  profileUrl: string;
  content: string;
  relativeTimeDescription: string;
  rating: number;
  time: string;
}

export interface Lodging {
  lodgingId: number;
  name: string;
  comment: string;
  image: string;
  address: string;
  contactNumber: string;
  category: string;
  fiveStar: number;
  fourStar: number;
  threeStar: number;
  twoStar: number;
  oneStar: number;
  zeroStar: number;
  rating: number;
  reviewCount: number;
  reviews: Review[];
}
