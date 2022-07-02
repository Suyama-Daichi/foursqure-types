import { Image } from "./Image";
import { PickerPosition } from "./PickerPosition";
import { StickerGroup } from "./StickerGroup";

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
