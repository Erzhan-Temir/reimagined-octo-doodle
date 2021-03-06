import {Review} from "../../types/review-data";
import {RootState} from "../root-reducer";

const reviewsSelector = (state: RootState) => state.reviews.reviewsList;
const getCurrentReviewIDs = (state: RootState) => state.reviews.currentReviewsID;

export const isReviewsLoading = (state: RootState): boolean => state.reviews.isLoading;

export const getReviews = (state: RootState): Review[] => {
  const reviews = reviewsSelector(state);
  const reviewsIDs = getCurrentReviewIDs(state);

  return reviews.filter((review) => reviewsIDs.some((id) => id === review.id));
};
