import {cities, citiesNameList} from '../constants/constants';
import {Offer} from '../types/offers-data';
import {
  names, REVIEWS_COUNT, headings, offerTypes, ratings, features,
  getRandomIntegerNumber, getRandomArrItem
} from './utils';


const getRandomCoords = (city: string) => {
  return {
    LAT: (Math.random() > 0.5) ? (cities[city].LAT + Math.random() / 20) : (cities[city].LAT - Math.random() / 20),
    LNG: (Math.random() > 0.5) ? (cities[city].LNG + Math.random() / 20) : (cities[city].LNG - Math.random() / 20),
  };
};


const getRandomOffer = (): Offer => {
  const city = getRandomArrItem(citiesNameList);

  return {
    isPremium: Math.random() > 0.5,
    image: `img/apartment-0${getRandomIntegerNumber(1, 4)}.jpg`,
    city,
    coords: getRandomCoords(city),
    price: getRandomIntegerNumber(60, 150),
    isBookmarked: false,
    rating: getRandomIntegerNumber(60, 100),
    heading: getRandomArrItem(headings),
    type: getRandomArrItem(offerTypes),
    reviewIDs: [(getRandomIntegerNumber(1, REVIEWS_COUNT)).toString(), (getRandomIntegerNumber(1, REVIEWS_COUNT)).toString()],
    details: {
      bedrooms: getRandomIntegerNumber(1, 5),
      occupation: getRandomIntegerNumber(1, 6),
      features,
      host: {
        name: getRandomArrItem(names),
        avatar: `https://placeimg.com/74/74/people`,
        rating: getRandomArrItem(ratings),
      }
    }
  };
};

export default getRandomOffer;
