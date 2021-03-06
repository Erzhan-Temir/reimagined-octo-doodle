import {itemCoords} from './utils';

export type ActiveOfferID = null | string;

export interface Details {
  bedrooms: number;
  occupation: number;
  features: string[];
  host: {
    name: string;
    avatar: string;
    rating: string;
  }
}

export interface Offer {
  id?: string;
  readonly isPremium: boolean;
  readonly image: string;
  readonly city: string;
  readonly coords: itemCoords;
  readonly price: number;
  readonly isBookmarked: boolean;
  readonly rating: number;
  readonly heading: string;
  readonly type: string;
  readonly reviewIDs: string[];
  readonly details: Details;
}

export interface OffersDataState {
  readonly isLoading: boolean;
  readonly offers: Offer[];
  readonly offer: null | Offer;
  readonly currentCity: string;
  readonly sorting: string;
  readonly activeOfferId: ActiveOfferID;
  readonly hasError: boolean;
}
