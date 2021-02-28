/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import {State} from '../types/offers';
import API from '../services/api';
import {Dispatch} from 'redux';
import {citiesNameList, sorting} from '../constants/constants';
import {ChangeCity, ChangeSorting, SetActiveOffer, FetchLogInSuccess} from '../types/actions';

type Action = {
  type: string,
  payload: State,
};

const initialState: State = {
  isLoading: true,
  offers: [],
  currentCity: citiesNameList[0],
  sorting: sorting["Popular"],
  activeOfferId: null,
  isLoggedIn: false,
  userInfo: {
    email: null,
    bookmarkedIds: null,
  },
  isLoginFormDisabled: false,
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
    case `SET_ACTIVE_OFFER`:
      return Object.assign({}, state, {
        activeOfferId: action.payload,
      });
    case `FETCH_LOGIN`:
      return Object.assign({}, state, {
        isLoginFormDisabled: true,
      });
    case `FETCH_LOGIN_SUCCESS`:
      return Object.assign({}, state, {
        isLoginFormDisabled: false,
        isLoggedIn: true,
        userInfo: {
          email: action.payload,
        }
      });
      break;
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
  },
  setActiveOffer: (id: string): SetActiveOffer => {
    return {
      type: `SET_ACTIVE_OFFER`,
      payload: id,
    };
  },
  fetchLogin: () => {
    return {
      type: `FETCH_LOGIN`
    };
  },
  fetchLogInSuccess: (email: string): FetchLogInSuccess => {
    return {
      type: `FETCH_LOGIN_SUCCESS`,
      payload: email
    };
  }
};

export const Operations = {
  fetchOffers: () => () => (dispatch: Dispatch) => {
    dispatch(ActionsCreator.fetchOffers());
    API.getOffers()
      .then((response) => dispatch(ActionsCreator.fetchOffersSuccess(response.data.offers)));
  },
  logIn: () => (email: string) => (dispatch: Dispatch) => {
    dispatch(ActionsCreator.fetchLogin());
    API.login(email)
      .then((response) => {
        dispatch(ActionsCreator.fetchLogInSuccess(response.data.users.email));
      });
  },
};
