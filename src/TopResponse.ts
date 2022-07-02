import { Response } from "./Response";

export interface TopResponse {
  meta: Meta;
  notifications: Notification[];
  response: Response;
}

export interface Meta {
  code: number;
  requestId: string;
}

export interface Notification {
  type: string;
  item: NotificationItem;
}

export interface NotificationItem {
  unreadCount: number;
}
