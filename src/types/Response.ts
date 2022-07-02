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

export interface Response {
  checkins: Checkins;
}

export interface Checkins {
  count: number;
  items: CheckinsItem[];
}

export interface CheckinsItem {
  id: string;
  createdAt: number;
  type: string;
  entities?: any[];
  shout?: string;
  timeZoneOffset: number;
  editableUntil?: number;
  venue: Venue;
  likes: Likes;
  like: boolean;
  isMayor: boolean;
  photos: Photos;
  posts: Posts;
  comments: Comments;
  source: Source;
  sticker?: Sticker;
}

export interface Comments {
  count: number;
}

export interface Likes {
  count: number;
  groups: GroupElement[];
  summary?: string;
}

export interface GroupElement {
  type: string;
  count: number;
  items: GroupItem[];
}

export interface GroupItem {
  id: string;
  firstName: string;
  lastName?: string;
  gender: string;
  address?: string;
  city?: string;
  state?: string;
  countryCode: string;
  relationship: string;
  photo: Icon;
}

export interface Icon {
  prefix: string;
  suffix: string;
}

export interface Photos {
  count: number;
  items: PhotosItem[];
  layout?: Layout;
}

export interface PhotosItem {
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

export interface Source {
  name: string;
  url: string;
}

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

export interface Layout {
  name: string;
  left?: Left;
  right?: Left;
}

export interface Left {
  id: string;
}

export interface Posts {
  count: number;
  textCount: number;
}

export interface Sticker {
  id: string;
  name: string;
  image: Image;
  stickerType: string;
  group: StickerGroup;
  pickerPosition: PickerPosition;
  teaseText: string;
  unlockText: string;
  bonusText?: string;
  points?: number;
  bonusStatus?: string;
}

export interface StickerGroup {
  name: string;
  index: number;
}

export interface Image {
  prefix: string;
  sizes: number[];
  name: string;
}

export interface PickerPosition {
  page: number;
  index: number;
}

export interface Venue {
  id: string;
  name: string;
  location: Location;
  categories: Category[];
  locked?: boolean;
}

export interface Category {
  id: string;
  name: string;
  pluralName: string;
  shortName: string;
  icon: Icon;
  primary: boolean;
}

export interface Location {
  address?: string;
  lat: number;
  lng: number;
  labeledLatLngs?: LabeledLatLng[];
  postalCode?: string;
  cc: string;
  city?: string;
  state: string;
  country: string;
  formattedAddress: string[];
  crossStreet?: string;
  neighborhood?: string;
}

export interface LabeledLatLng {
  label: string;
  lat: number;
  lng: number;
}
