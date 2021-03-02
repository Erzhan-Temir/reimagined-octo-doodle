import {itemCoords} from './utils';

type Details = {
  bedrooms: number,
  occupation: number,
  features: string[],
  host: {
    name: string,
    avatar: string,
    rating: string,
  }
}

export type Offer = {
  readonly id?: string;
  readonly isPremium: boolean;
  readonly image: string;
  readonly city: string;
  readonly coords: itemCoords;
  readonly price: number;
  readonly isBookmarked: boolean;
  readonly rating: number;
  readonly heading: string;
  readonly type: string;
  readonly reviewIDs: number[];
  readonly details: Details;
}

export type UserInfo = {
  email: null | string,
  bookmarkedIds: null | string[],
}

export interface OffersDataState {
  readonly isLoading: boolean,
  readonly offers: Offer[],
  readonly offer: null | Offer,
  readonly currentCity: string,
  readonly sorting: string,
  readonly activeOfferId: null | string,
}
