/* eslint-disable @typescript-eslint/no-explicit-any */
import {Dispatch} from 'redux';
import {Review, ReviewState} from '../../types/review-data';
import API from '../../services/api';
import {Offer} from '../../types/offers-data';
import {ActionsCreator as OfferActionsCreator} from '../offers-data/offers-data';

const initialState: ReviewState = {
  isLoading: true,
  reviewsList: [],
  currentReviewsID: [],
};

enum UserAction {
  FETCH_REVIEWS = `FETCH_REVIEWS`,
  FETCH_REVIEWS_SUCCESS = `FETCH_REVIEWS_SUCCESS`,
  SET_CURRENT_REVIEWS_ID = `SET_CURRENT_REVIEWS_ID`,
  ADD_REVIEW = `ADD_REVIEW`,
}

export interface ActionType {
  type: UserAction,
  payload: Review[] | Review | number[] | null,
}

export const ActionsCreator = {
  fetchReviews: (): ActionType => {
    return {
      type: UserAction.FETCH_REVIEWS,
      payload: null,
    };
  },
  fetchReviewsSuccess: (reviews: Review[]): ActionType => {
    return {
      type: UserAction.FETCH_REVIEWS_SUCCESS,
      payload: reviews,
    };
  },
  setCurrentReviewsID: (reviewIDs: number[]): ActionType => {
    return {
      type: UserAction.SET_CURRENT_REVIEWS_ID,
      payload: reviewIDs,
    };
  },
  addReview: (review: Review): ActionType => {
    return {
      type: UserAction.ADD_REVIEW,
      payload: review,
    };
  },
};

export const Operations = {
  fetchReviews: () => () => (dispatch: Dispatch): void => {
    dispatch(ActionsCreator.fetchReviews());
    API.getReviews()
      .then((response) => dispatch(ActionsCreator.fetchReviewsSuccess(response.data.reviews)));
  },
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  addReview: () => (newReview: Review, offer: Offer) => (dispatch: any): void => {
    API.addReview(newReview)
      .then((response) => {
        dispatch(ActionsCreator.addReview(response.data.reviews));
        return response.data.reviews;
      })
      .then((review) => {
        offer.reviewIDs.push(review.id);
        return API.updateOffer(offer.id, offer);
      })
      .then((response) => dispatch(OfferActionsCreator.fetchOfferSuccess(response.data.offers)));
  },
};

export const reviewsReducer = (state: ReviewState = initialState, action: ActionType): ReviewState => {
  switch (action.type) {
    case UserAction.FETCH_REVIEWS:
      return Object.assign({}, state, {
        isLoading: true,
      });
    case UserAction.FETCH_REVIEWS_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        reviewsList: action.payload,
      });
    case UserAction.SET_CURRENT_REVIEWS_ID:
      return Object.assign({}, state, {
        currentReviewsID: action.payload,
      });
    case UserAction.ADD_REVIEW:
      return Object.assign({}, state, {
        isLoading: true,
      });
    default:
      return state;
  }
};
