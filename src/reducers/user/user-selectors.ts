import {Offer} from "../../types/offers-data";
import {RootState} from "../root-reducer";
import {getAllOffers} from '../offers-data/offers-data-selectors';
import {UserInfo} from "../../types/user-data";

const getFavoritesIDs = (state: RootState) => state.user.userInfo.bookmarkedIds;

export const getLoginInfo = (state: RootState): boolean => state.user.isLoggedIn;

export const getLoginNoticeStatus = (state: RootState): boolean => state.user.isLoginNoticeShowed;

export const getFavoritesListLength = (state: RootState): number => {
  return state.user.userInfo.bookmarkedIds.length;
};

export const getAllFavoritesOffers = (state: RootState): Offer[] => {
  return getAllOffers(state).filter((offer) => getFavoritesIDs(state).some((id) => id === offer.id));
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

export const getPendingAuthorization = (state: RootState): boolean => state.user.pendingAuthorization;

export const getUserInfo = (state: RootState): UserInfo => state.user.userInfo;
