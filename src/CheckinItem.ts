import { CommentSummary } from "./CommentSummary";
import { LikeSummary } from "./LikeSummary";
import { PhotoSummary } from "./PhotoSummary";
import { PostSummary } from "./PostSummary";
import { Source } from "./Source";
import { Sticker } from "./Sticker";
import { Venue } from "./Venue";

export interface CheckinItem {
  id: string;
  createdAt: number;
  type: string;
  entities?: any[];
  shout?: string;
  timeZoneOffset: number;
  editableUntil?: number;
  venue: Venue;
  likes: LikeSummary;
  like: boolean;
  isMayor: boolean;
  photos: PhotoSummary;
  posts: PostSummary;
  comments: CommentSummary;
  source: Source;
  sticker?: Sticker;
}
