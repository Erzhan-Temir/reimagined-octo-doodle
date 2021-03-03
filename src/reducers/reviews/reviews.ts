import {Dispatch} from 'redux';
import {Review, ReviewState} from '../../types/review-data';
import API from '../../services/api';

const initialState: ReviewState = {
  isLoading: true,
  reviewsList: [],
  currentReviewsID: [],
};

enum UserAction {
  FETCH_REVIEWS = `FETCH_REVIEWS`,
  FETCH_REVIEWS_SUCCESS = `FETCH_REVIEWS_SUCCESS`,
  SET_CURRENT_REVIEWS_ID = `SET_CURRENT_REVIEWS_ID`,
}

export interface ActionType {
  type: UserAction,
  payload?: Review[]|number[],
}

export const ActionsCreator = {
  fetchReviews: (): ActionType => {
    return {
      type: UserAction.FETCH_REVIEWS,
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
  }
};

export const Operations = {
  fetchReviews: () => () => (dispatch: Dispatch): void => {
    dispatch(ActionsCreator.fetchReviews());
    API.getReviews()
      .then((response) => dispatch(ActionsCreator.fetchReviewsSuccess(response.data.reviews)));
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
    default:
      return state;
  }
};
