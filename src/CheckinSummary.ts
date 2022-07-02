import { Summary } from "./Share";
import { CheckinItem } from "./CheckinItem";

export interface CheckinSummary extends Summary {
  items: CheckinItem[];
}
