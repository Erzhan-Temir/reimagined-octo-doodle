import {cities, citiesNameList} from '../constants/constants';
import {Offer} from '../types/offers-data';

const headings = [`Beautiful & luxurious apartment at great location`, `Wood and stone place`, `Canal View Prinsengracht`, `Nice, cozy, warm big bed apartment`];
const offerTypes = [`Apartment`, `Private room`];

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
  };
};

export default getRandomOffer;
