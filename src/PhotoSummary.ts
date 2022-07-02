import { Layout } from "./Layout";
import { PhotoItem } from "./PhotoItem";
import { Summary } from "./Share";

export interface PhotoSummary extends Summary {
  items: PhotoItem[];
  layout?: Layout;
}
