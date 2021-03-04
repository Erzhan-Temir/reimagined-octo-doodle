import {Review} from '../types/review-data';
import {
  names, texts,
  getRandomIntegerNumber, getRandomArrItem
} from './utils';

const getRandomReview = (): Review => {
  return {
    avatar: `https://placeimg.com/54/54/people`,
    author: getRandomArrItem(names),
    text: getRandomArrItem(texts),
    date: `2019-04-24T00:00:00.000Z`,
    rating: getRandomIntegerNumber(60, 100),
  };
};

export default getRandomReview;
