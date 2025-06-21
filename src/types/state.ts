export interface StateData {
  id: string;
  state_id: number;
  name: string;
  dance: string;
  festival: string;
  description: string;
  image: string;
  svg: string;
  wikiLink: string;
  official_website?: string;
  isActive: boolean;
  alternate_dance?: string;
  famous_quote?: string;
  famous_person?: string;
  famous_food?: string;
  famous_place?: string;
  famous_dress?: string;
  famous_language?: string;
  famous_sport?: string;
  state_color?: string;
  state_animal?: string;
  state_flower?: string;
  surface_area?: number; // in square kilometers
  districts_count?: number;
  largest_city?: string;
  capital?: string;
  population?: number;
  literacy_rate?: number;
  languages?: string[];
  major_rivers?: string[];
}
