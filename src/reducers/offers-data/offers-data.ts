import {Offer, OffersDataState} from '../../types/offers-data';
import API from '../../services/api';
import {Dispatch} from 'redux';
import {citiesNameList, sorting} from '../../constants/constants';
// import {ChangeCity, ChangeSorting, SetActiveOffer} from '../types/actions';

const initialState: OffersDataState = {
  isLoading: true,
  offers: [],
  currentCity: citiesNameList[0],
  sorting: sorting["Popular"],
  activeOfferId: null,
};


enum UserAction {
  FETCH_OFFERS = `FETCH_OFFERS`,
  FETCH_OFFERS_SUCCESS = `FETCH_OFFERS_SUCCESS`,
  CHANGE_CITY = `CHANGE_CITY`,
  CHANGE_SORTING = `CHANGE_SORTING`,
  SET_ACTIVE_OFFER = `SET_ACTIVE_OFFER`,
}

export interface ActionType {
  type: UserAction,
  payload?: string|Offer[]
}

export const ActionsCreator = {
  fetchOffers: (): ActionType => {
    return {
      type: UserAction.FETCH_OFFERS,
    };
  },
  fetchOffersSuccess: (offers: Offer[]): ActionType => {
    return {
      type: UserAction.FETCH_OFFERS_SUCCESS,
      payload: offers,
    };
  },
  changeCity: (city: string): ActionType => {
    return {
      type: UserAction.CHANGE_CITY,
      payload: city,
    };
  },
  changeSorting: (sorting: string): ActionType => {
    return {
      type: UserAction.CHANGE_SORTING,
      payload: sorting,
    };
  },
  setActiveOffer: (id: string): ActionType => {
    return {
      type: UserAction.SET_ACTIVE_OFFER,
      payload: id,
    };
  },
};


export const Operations = {
  fetchOffers: () => () => (dispatch: Dispatch): void => {
    dispatch(ActionsCreator.fetchOffers());
    API.getOffers()
      .then((response) => dispatch(ActionsCreator.fetchOffersSuccess(response.data.offers)));
  },
};

export const offersDataReducer = (state: OffersDataState = initialState, action: ActionType): OffersDataState => {
  switch (action.type) {
    case UserAction.FETCH_OFFERS:
      return Object.assign({}, state, {
        isLoading: true,
      });
    case UserAction.FETCH_OFFERS_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        offers: action.payload,
      });
    case UserAction.CHANGE_CITY:
      return Object.assign({}, state, {
        currentCity: action.payload,
        sorting: sorting["Popular"],
      });
    case UserAction.CHANGE_SORTING:
      return Object.assign({}, state, {
        sorting: action.payload,
      });
    case UserAction.SET_ACTIVE_OFFER:
      return Object.assign({}, state, {
        activeOfferId: action.payload,
      });
      break;
    default:
      return state;
  }
};
