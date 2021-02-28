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

export type UserInfo = {
  email: null|string,
  bookmarkedIds: null|string[],
}

export type State = {
  readonly isLoading: boolean,
  readonly offers: Offer[],
  readonly currentCity: string,
  readonly sorting: string,
  readonly activeOfferId: null | string,
  readonly isLoggedIn: boolean,
  readonly userInfo: UserInfo,
  readonly isLoginFormDisabled: boolean,
}
