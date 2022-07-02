import { Category } from "./Category";

export interface Venue {
  id: string;
  name: string;
  location: Location;
  categories: Category[];
  locked?: boolean;
}
