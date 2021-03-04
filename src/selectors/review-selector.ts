/* eslint-disable @typescript-eslint/no-non-null-assertion */
import {createSelector} from 'reselect';
import {ReviewState} from '../types/review-data';

const reviewsSelector = (state: ReviewState) => state.reviewsList;
const getCurrentReviewIDs = (state: ReviewState) => state.currentReviewsID;

const filterSelector = createSelector(
    [reviewsSelector, getCurrentReviewIDs],
    (reviewsList, currentReviewsID) => {
      return reviewsList.filter((review) => currentReviewsID.some((id) => id === review.id!));
    }
);

export default filterSelector;
