import {CitiesDictionary, SortingDictionary} from '../types/utils';

export const cities: CitiesDictionary = {
  "Amsterdam": {
    LAT: 52.38333,
    LNG: 4.9,
  },
  "Paris": {
    LAT: 48.864716,
    LNG: 2.349014,
  },
  "Cologne": {
    LAT: 50.935173,
    LNG: 6.953101,
  },
  "Brussels": {
    LAT: 50.85045,
    LNG: 4.34878,
  },
  "Hamburg": {
    LAT: 53.551086,
    LNG: 9.993682,
  },
  "Dusseldorf": {
    LAT: 51.22172,
    LNG: 6.77616,
  },
};

export const sortingData: SortingDictionary = {
  "Popular": `popular`,
  "Price: low to high": `to-high`,
  "Price: high to low": `to-low`,
  "Top rated first": `top-rated`,
};

export const citiesNameList = Object.keys(cities);
