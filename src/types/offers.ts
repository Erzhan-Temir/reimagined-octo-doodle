import {itemCoords} from './utils';

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
}

export type State = {
  readonly isLoading: boolean,
  readonly offers: Offer[],
  readonly currentCity: string,
}
