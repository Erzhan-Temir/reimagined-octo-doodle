/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import {State} from '../types/offers';
import API from '../services/api';
import {Dispatch} from 'redux';
import {citiesNameList, sorting} from '../constants/constants';
import {ChangeCity, ChangeSorting} from '../types/actions';

type Action = {
  type: string,
  payload: State,
};

const initialState: State = {
  isLoading: true,
  offers: [],
  currentCity: citiesNameList[0],
  sorting: sorting["Popular"],
};

export const reducer = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case `FETCH_OFFERS`:
      return Object.assign({}, state, {
        isLoading: true,
      });
    case `FETCH_OFFERS_SUCCESS`:
      return Object.assign({}, state, {
        isLoading: false,
        offers: action.payload,
      });
    case `CHANGE_CITY`:
      return Object.assign({}, state, {
        currentCity: action.payload,
        sorting: sorting["Popular"],
      });
    case `CHANGE_SORTING`:
      return Object.assign({}, state, {
        sorting: action.payload,
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
      payload: offers,
    };
  },
  changeCity: (city: string): ChangeCity => {
    return {
      type: `CHANGE_CITY`,
      payload: city,
    };
  },
  changeSorting: (sorting: string): ChangeSorting => {
    return {
      type: `CHANGE_SORTING`,
      payload: sorting,
    };
  }
};

export const Operations = {
  fetchOffers: () => () => (dispatch: Dispatch) => {
    dispatch(ActionsCreator.fetchOffers());
    API.getOffers()
      .then((response) => dispatch(ActionsCreator.fetchOffersSuccess(response.data.offers)));
  }
};
