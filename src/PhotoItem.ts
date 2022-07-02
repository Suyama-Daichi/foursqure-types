import { Source } from "./Source";
import { User } from "./User";

export interface PhotoItem {
  id: string;
  createdAt: number;
  source: Source;
  prefix: string;
  suffix: string;
  width: number;
  height: number;
  demoted: boolean;
  user: User;
  visibility: string;
}
