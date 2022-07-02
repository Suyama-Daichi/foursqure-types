import { Icon } from "./Icon";

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  gender: string;
  address: string;
  city: string;
  state: string;
  countryCode: string;
  relationship: string;
  photo: Icon;
}
