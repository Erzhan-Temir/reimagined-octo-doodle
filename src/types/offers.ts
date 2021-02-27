export type Offer = {
  readonly id: string;
  readonly isPremium: boolean;
  readonly image: string;
  readonly price: number;
  readonly isBookmarked: boolean;
  readonly rating: number;
  readonly heading: string;
  readonly type: string;
}

export type State = {
  readonly isLoading: boolean,
  readonly offers: Offer[],
};
