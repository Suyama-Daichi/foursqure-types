import { LabeledLatLng } from "./LabeledLatLng";

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
