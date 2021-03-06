import {userReducer, initialState, UserAction, addIdToBookmarkedID} from './user';

describe(`User info reducer work properly`, () => {
  it(`Authentication works correctly`, () => {
    const mockUserEmail = `test@test.com`;

    expect(userReducer(initialState, {
      type: UserAction.LOGIN,
      payload: mockUserEmail,
    })).toEqual({
      pendingAuthorization: false,
      isLoggedIn: true,
      isLoginNoticeShowed: false,
      isFavoriteButtonDisabled: false,
      userInfo: {
        email: mockUserEmail,
        bookmarkedIds: []
      }
    });
  });

  it(`New review ID adds properly to the state`, () => {
    expect(userReducer(initialState, {
      type: UserAction.ADD_TO_BOOKMARKED_IDS,
      payload: `1`,
    })).toEqual({
      pendingAuthorization: true,
      isLoggedIn: false,
      isLoginNoticeShowed: false,
      isFavoriteButtonDisabled: false,
      userInfo: {
        email: ``,
        bookmarkedIds: [`1`]
      }
    });
  });
});

describe(`Function that adds review ID to the state works correctly`, () => {
  const mockIDs = [`1`, `3`, `10`];
  it(`Function that adds review ID deletes existed ID`, () => {
    expect(addIdToBookmarkedID(mockIDs, `3`)).toEqual([`1`, `10`]);
  });

  it(`Function that adds review ID adds new ID`, () => {
    expect(addIdToBookmarkedID(mockIDs, `11`)).toEqual([`1`, `10`, `11`]);
  });
});


