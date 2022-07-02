import { Summary } from "./Share";
import { User } from "./User";

export interface LikeUserSummary extends Summary {
  type: string;
  items: User[];
}
