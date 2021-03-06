/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import API from '../../services/api';
import {citiesNameList, sortingData} from '../../constants/constants';
import {Dispatch} from 'redux';
import {Offer, OffersDataState} from '../../types/offers-data';

export const initialState: OffersDataState = {
  isLoading: true,
  hasError: false,
  offers: [],
  offer: null,
  activeOfferId: null,
  currentCity: citiesNameList[0],
  sorting: sortingData["Popular"],
};


export enum UserAction {
  FETCH_OFFERS = `FETCH_OFFERS`,
  FETCH_OFFERS_SUCCESS = `FETCH_OFFERS_SUCCESS`,
  FETCH_OFFERS_ERROR = `FETCH_OFFERS_ERROR`,
  FETCH_OFFER_SUCCESS = `FETCH_OFFER_SUCCESS`,
  REMOVE_OFFER_FROM_STATE = `REMOVE_OFFER_FROM_STATE`,
  CHANGE_CITY = `CHANGE_CITY`,
  CHANGE_SORTING = `CHANGE_SORTING`,
  SET_ACTIVE_OFFER = `SET_ACTIVE_OFFER`,
  TOGGLE_BOOKMARKED_BUTTON = `TOGGLE_BOOKMARKED_BUTTON`,
}


export interface ActionType {
  type: UserAction,
  payload?: string|Offer|Offer[]
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

  fetchOfferSuccess: (offer: Offer): ActionType => {
    return {
      type: UserAction.FETCH_OFFER_SUCCESS,
      payload: offer,
    };
  },

  fetchOffersError: (): ActionType => {
    return {
      type: UserAction.FETCH_OFFERS_ERROR
    };
  },

  removeOfferFromState: (): ActionType => {
    return {
      type: UserAction.REMOVE_OFFER_FROM_STATE,
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

  setActiveOffer: (id?: string): ActionType => {
    return {
      type: UserAction.SET_ACTIVE_OFFER,
      payload: id,
    };
  },

  toggleBookmarkedButton: (id?: string): ActionType => {
    return {
      type: UserAction.TOGGLE_BOOKMARKED_BUTTON,
      payload: id,
    };
  },
};


export const Operations = {
  fetchOffers: (dispatch: Dispatch): void => {
    dispatch(ActionsCreator.fetchOffers());
    API.getOffers()
      .then((response) => dispatch(ActionsCreator.fetchOffersSuccess(response.data.offers)));
  },

  updateOffers: (id: any, offer: Offer) => (dispatch: Dispatch): void => {
    dispatch(ActionsCreator.toggleBookmarkedButton(id));
    const updatedOffer = Object.assign({}, offer, {
      isBookmarked: !offer.isBookmarked,
    });
    API.updateOffer(id, updatedOffer);
  },

  fetchOffer: (id: string) => (dispatch: Dispatch): void => {
    dispatch(ActionsCreator.fetchOffers());
    API.getOffer(id)
      .then((response) => dispatch(ActionsCreator.fetchOfferSuccess(response.data.offers)));
  },

  updateOffer: (review: any, offer: Offer) => (dispatch: Dispatch): void => {
    offer.reviewIDs.push(review.id);
    API.updateOffer(offer.id, offer)
      .then((response) => dispatch(ActionsCreator.fetchOfferSuccess(response.data.offers)));
  },
};

export const updateBookmarkedFlagInOffer = (offers: Offer[], id?: any): Offer[] => {
  const updOfferIndex = offers.findIndex((offer) => offer.id === id);
  const updatedOffer = Object.assign({}, offers[updOfferIndex], {
    isBookmarked: !offers[updOfferIndex].isBookmarked,
  });
  offers.splice(updOfferIndex, 1, updatedOffer);
  return offers;
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

    case UserAction.FETCH_OFFERS_ERROR:
      return Object.assign({}, state, {
        isLoading: false,
        hasError: true,
      });

    case UserAction.FETCH_OFFER_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        offer: action.payload,
      });

    case UserAction.REMOVE_OFFER_FROM_STATE:
      return Object.assign({}, state, {
        isLoading: true,
        offer: null,
      });

    case UserAction.CHANGE_CITY:
      return Object.assign({}, state, {
        currentCity: action.payload,
        sorting: sortingData["Popular"],
      });

    case UserAction.CHANGE_SORTING:
      return Object.assign({}, state, {
        sorting: action.payload,
      });

    case UserAction.SET_ACTIVE_OFFER:
      return Object.assign({}, state, {
        activeOfferId: action.payload,
      });

    case UserAction.TOGGLE_BOOKMARKED_BUTTON:
      return Object.assign({}, state, {
        offers: updateBookmarkedFlagInOffer(state.offers.slice(), action.payload),
      });

    default:
      return state;
  }
};


