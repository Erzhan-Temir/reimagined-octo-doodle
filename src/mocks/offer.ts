import {cities, citiesNameList} from '../constants/constants';
import {Offer} from '../types/offers-data';
import {names, REVIEWS_COUNT} from './utils';

const headings = [`Beautiful & luxurious apartment at great location`, `Wood and stone place`, `Canal View Prinsengracht`, `Nice, cozy, warm big bed apartment`];
const offerTypes = [`Apartment`, `Private room`, `Entire place`];
const features = [`Wi-Fi`, `Heating`, `Kitchen`, `Fridge`, `Washing machine`, `Coffee machine`, `Dishwasher`, `Towels`, `Baby seat`, `Cabel TV`];

const ratings = [`Pro`, `Landlord`, `Agency`];

const getRandomCoords = (city: string) => {
  return {
    LAT: (Math.random() > 0.5) ? (cities[city].LAT + Math.random() / 20) : (cities[city].LAT - Math.random() / 20),
    LNG: (Math.random() > 0.5) ? (cities[city].LNG + Math.random() / 20) : (cities[city].LNG - Math.random() / 20),
  };
};

const getRandomIntegerNumber = (min: number, max: number): number => {
  return min + Math.floor(Math.random() * (max - min));
};

const getRandomArrItem = (arr: string[]): string => {
  return arr[getRandomIntegerNumber(0, arr.length)];
};

const getRandomOffer = (): Offer => {
  const city = getRandomArrItem(citiesNameList);

  return {
    isPremium: Math.random() > 0.5,
    image: `img/apartment-0${getRandomIntegerNumber(1, 4)}.jpg`,
    city,
    coords: getRandomCoords(city),
    price: getRandomIntegerNumber(60, 150),
    isBookmarked: Math.random() > 0.5,
    rating: getRandomIntegerNumber(60, 100),
    heading: getRandomArrItem(headings),
    type: getRandomArrItem(offerTypes),
    reviewIDs: [getRandomIntegerNumber(1, REVIEWS_COUNT), getRandomIntegerNumber(1, REVIEWS_COUNT)],
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
