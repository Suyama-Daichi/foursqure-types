import { LikeUserSummary } from "./LikeUserSummary";
import { Summary } from "./Share";

export interface LikeSummary extends Summary {
  groups: LikeUserSummary[];
  summary?: string;
}
