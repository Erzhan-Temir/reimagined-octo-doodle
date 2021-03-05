import {Offer} from "../../types/offers-data";
import {RootState} from "../root-reducer";
import {getOffers} from '../offers-data/selectors';

const getFavoritesIDs = (state: RootState) => state.user.userInfo.bookmarkedIds;

export const getFavoritesListLength = (state: RootState): number => {
  return state.user.userInfo.bookmarkedIds.length;
};

export const getAllFavoritesOffers = (state: RootState): Offer[] => {
  return getOffers(state).filter((offer) => getFavoritesIDs(state).some((id) => id === offer.id));
};

export const getFavoritesCitiesList = (state: RootState): string[] => {
  const citiesListRaw = getAllFavoritesOffers(state).map((offer) => offer.city);
  const citiesListSet = new Set(citiesListRaw);
  return Array.from(citiesListSet).sort();
};

export const getFavoritesOffersFromCity = (city: string) => (state: RootState): Offer[] => {
  const favoritesOffer = getAllFavoritesOffers(state);
  return favoritesOffer.filter((offer) => (offer.city === city));
};
