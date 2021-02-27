import {State} from '../types/offers';
import API from '../services/api';
import {ActionCreator, AnyAction, Dispatch} from 'redux';
import {ThunkAction} from 'redux-thunk';

type Action = {
  type: string,
  payload: State,
};

const initialState: State = {
  isLoading: true,
  offers: [],
};

export const reducer = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case `FETCH_OFFERS`:
      return Object.assign({}, state, {
        isLoading: true,
      });
    case `FETCH_OFFERS_SUCCESS`:
      return Object.assign({}, state, {
        offers: action.payload,
      });
    default:
      return state;
  }
};

export const ActionsCreator = {
  fetchOffers: () => {
    return {
      type: `FETCH_OFFERS`,
    };
  },
  fetchOffersSuccess: (offers: State) => {
    return {
      type: `FETCH_OFFERS_SUCCESS`,
      payload: offers
    };
  }
};

export const Operations = {
  fetchOffers: () => () => (dispatch: Dispatch)=> {
    dispatch(ActionsCreator.fetchOffers());
    API.getOffers()
      .then((response) => dispatch(ActionsCreator.fetchOffersSuccess(response.data.tasks)));
  }
};
