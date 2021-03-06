import getRandomOffer from '../../mocks/offer';
import {initialState, UserAction, offersDataReducer, updateBookmarkedFlagInOffer} from './offers-data';

describe(`Function to toggle bookmarked ID testing`, () => {
  it(`Function correctly changes bookmarked flag in offer`, () => {
    const mockOffersList = [];
    for (let offerIndex = 0; offerIndex < 5; offerIndex++) {
      mockOffersList.push(getRandomOffer());
      mockOffersList[offerIndex].id = (offerIndex).toString();
    }

    updateBookmarkedFlagInOffer(mockOffersList, `1`);
    expect(mockOffersList[1].isBookmarked).toBe(true);
  });
});

describe(`Offers data reducer testing`, () => {
  it(`City changes correctly`, () => {
    expect(offersDataReducer(initialState, {
      type: UserAction.CHANGE_CITY,
      payload: `Paris`,
    })
      .currentCity
    ).toEqual(`Paris`);
  });

  it(`Sorting value changes correctly`, () => {
    expect(offersDataReducer(initialState, {
      type: UserAction.CHANGE_SORTING,
      payload: `to-low`,
    })
      .sorting
    ).toEqual(`to-low`);
  });
});


