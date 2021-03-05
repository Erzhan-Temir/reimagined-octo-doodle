/* eslint-disable @typescript-eslint/no-explicit-any */
import {Offer} from "../../types/offers-data";
import {RootState} from "../root-reducer";

export const getOffers = (state: RootState): Offer[] => state.offersData.offers;

export const getOffer = (id: string) => (state: RootState): any => state.offersData.offers.find((offer) => offer.id === id);
