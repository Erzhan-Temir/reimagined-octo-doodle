/* eslint-disable @typescript-eslint/no-explicit-any */
import {ActiveOfferID, Offer} from "../../types/offers-data";
import {RootState} from "../root-reducer";

export const getAllOffers = (state: RootState): Offer[] => state.offersData.offers;

export const getOfferById = (id: string) => (state: RootState): any => state.offersData.offers.find((offer) => offer.id === id);

export const getActiveOfferID = (state: RootState): ActiveOfferID => state.offersData.activeOfferId;

export const getCurrentCity = (state: RootState): string => state.offersData.currentCity;

export const getOffer = (state: RootState): any => state.offersData.offer;

export const isOffersLoading = (state: RootState): boolean => state.offersData.isLoading;

export const getOffersFilteredByCity = (state: RootState): Offer[] => {
  const offers = getAllOffers(state);
  const currentCity = getCurrentCity(state);
  return offers.filter((offer) => (offer.city === currentCity));
};

export const getSortingValue = (state: RootState): string => state.offersData.sorting;

export const getSortedOffers = (state: RootState): Offer[] => {
  const offers = getOffersFilteredByCity(state);
  const sorting = getSortingValue(state);

  switch (sorting) {
    case `popular`:
      return offers;
    case `to-high`:
      return offers.slice().sort((a, b) => (a.price - b.price));
    case `to-low`:
      return offers.slice().sort((a, b) => (b.price - a.price));
    case `top-rated`:
      return offers.slice().sort((a, b) => (b.rating - a.rating));
    default:
      return offers;
  }
};

export const getErrorStatus = ({offersData}: RootState): boolean => offersData.hasError;
