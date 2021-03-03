import {createSelector} from 'reselect';
import {OffersDataState} from '../types/offers-data';

const offersSelector = (state: OffersDataState) => state.offers;
const getCurrentCitySelector = (state: OffersDataState) => state.currentCity;
const getSortingSelector = (state: OffersDataState) => state.sorting;

const filterSelector = createSelector(
    [offersSelector, getCurrentCitySelector],
    (offers, currentCity) => offers.filter((offer) => (offer.city === currentCity))
);

const sortingSelector = createSelector(
    [filterSelector, getSortingSelector],
    (offers, sorting) => {
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
    }
);

export default sortingSelector;
