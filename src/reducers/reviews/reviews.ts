/* eslint-disable @typescript-eslint/no-explicit-any */
import API from '../../services/api';
import {Dispatch} from 'redux';
import {Offer} from '../../types/offers-data';
import {Operations as OffersDataOperations} from '../offers-data/offers-data';
import {Review, ReviewIDs, ReviewState} from '../../types/review-data';

const initialState: ReviewState = {
  isLoading: true,
  reviewsList: [],
  currentReviewsID: [],
};


enum UserAction {
  ADD_REVIEW = `ADD_REVIEW`,
  FETCH_REVIEWS = `FETCH_REVIEWS`,
  FETCH_REVIEWS_SUCCESS = `FETCH_REVIEWS_SUCCESS`,
  SET_CURRENT_REVIEWS_ID = `SET_CURRENT_REVIEWS_ID`,
}


export interface ActionType {
  type: UserAction,
  payload: Review[] | Review | ReviewIDs | null,
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

  setCurrentReviewsID: (reviewIDs: ReviewIDs): ActionType => {
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


const createReview = (commentText: string, rating: number, author: string) => {
  return {
    avatar: `../img/avatar.svg`,
    author,
    text: commentText,
    date: (new Date()).toString(),
    rating: rating * 100 / 5,
  };
};


export const Operations = {
  fetchReviews: (dispatch: Dispatch): void => {
    dispatch(ActionsCreator.fetchReviews());
    API.getReviews()
      .then((response) => dispatch(ActionsCreator.fetchReviewsSuccess(response.data.reviews)));
  },

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  addReview: ({text, rating, author}: Review, offer: Offer) => (dispatch: any): void => {
    API.addReview(createReview(text, rating, author))
      .then((response) => {
        dispatch(ActionsCreator.addReview(response.data.reviews));
        return response.data.reviews;
      })
      .then((review) => dispatch(OffersDataOperations.updateOffer(review, offer)));
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
