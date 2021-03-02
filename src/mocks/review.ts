import {names} from './utils';
import {Review} from '../types/review-data';

const texts = [`A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`, `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sagittis ligula in metus vulputate tempor.`, `Pellentesque vel velit felis. Praesent congue purus eu egestas porttitor. Sed vulputate at dolor eget tincidunt.`];

const getRandomIntegerNumber = (min: number, max: number): number => {
  return min + Math.floor(Math.random() * (max - min));
};

const getRandomArrItem = (arr: string[]): string => {
  return arr[getRandomIntegerNumber(0, arr.length)];
};

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
