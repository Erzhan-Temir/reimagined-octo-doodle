export const OFFERS_COUNT = 20;

export const REVIEWS_COUNT = 10;

export const names = [`Angelina`, `Hoster`, `Ivan`, `Imre`];

export const headings = [`Beautiful & luxurious apartment at great location`, `Wood and stone place`, `Canal View Prinsengracht`, `Nice, cozy, warm big bed apartment`];

export const offerTypes = [`Apartment`, `Private room`, `Entire place`];

export const features = [`Wi-Fi`, `Heating`, `Kitchen`, `Fridge`, `Washing machine`, `Coffee machine`, `Dishwasher`, `Towels`, `Baby seat`, `Cabel TV`];

export const ratings = [`Pro`, `Landlord`, `Agency`];

export const texts = [`A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`, `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sagittis ligula in metus vulputate tempor.`, `Pellentesque vel velit felis. Praesent congue purus eu egestas porttitor. Sed vulputate at dolor eget tincidunt.`];


export const getRandomIntegerNumber = (min: number, max: number): number => {
  return min + Math.floor(Math.random() * (max - min));
};

export const getRandomArrItem = (arr: string[]): string => {
  return arr[getRandomIntegerNumber(0, arr.length)];
};
