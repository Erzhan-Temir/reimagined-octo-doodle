export interface Review {
  id?: string;
  avatar: string;
  author: string;
  text: string;
  date: string;
  rating: number;
}

export interface ReviewState {
  readonly isLoading: boolean;
  readonly reviewsList: Review[];
  readonly currentReviewsID: number[];
}
