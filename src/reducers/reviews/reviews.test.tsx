import {reviewsReducer, UserAction, createReview} from './reviews';

describe(`Create review function testing`, () => {
  it(`New reviews creates properly`, () => {
    const text = `some text`;
    const rating = 4;
    const author = `some author`;

    expect(createReview(text, rating, author)).toEqual({
      avatar: `../img/avatar.svg`,
      author,
      text,
      date: (new Date()).toString(),
      rating: rating * 100 / 5,
    });
  });
});

describe(`Review reducer testing`, () => {
  it(`Reviews add to the state correctly after fetching`, () => {
    const mockReview = {
      avatar: `../img/avatar.svg`,
      author: `some text`,
      text: `some text`,
      date: (new Date()).toString(),
      rating: 73,
    };

    expect(reviewsReducer({
      isLoading: true,
      reviewsList: [],
      currentReviewsID: [],
    }, {
      type: UserAction.FETCH_REVIEWS_SUCCESS,
      payload: [mockReview],
    })).toEqual({
      isLoading: false,
      reviewsList: [mockReview],
      currentReviewsID: [],
    });
  });

  it(`Reviews IDs added to the state correctly`, () => {
    expect(reviewsReducer({
      isLoading: true,
      reviewsList: [],
      currentReviewsID: [],
    }, {
      type: UserAction.SET_CURRENT_REVIEWS_ID,
      payload: [11, 12],
    })).toEqual({
      isLoading: true,
      reviewsList: [],
      currentReviewsID: [11, 12],
    });
  });

});


