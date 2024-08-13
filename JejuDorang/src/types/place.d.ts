export interface Place {
  id: string;
  place_name: string;
  y: number;
  x: number;
}

export interface PlacesSearchResultItem extends Place {
  y: string;
  x: string;
}
