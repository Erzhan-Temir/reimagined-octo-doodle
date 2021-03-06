/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import {UserState} from '../../types/user-data';
import {Dispatch} from 'redux';
import {Operations as OffersDataOperations} from '../offers-data/offers-data';
import API from '../../services/api';
import {Offer} from '../../types/offers-data';

const initialState: UserState = {
  isLoggedIn: false,
  isLoginNoticeShowed: false,
  isFavoriteButtonDisabled: false,
  pendingAuthorization: true,
  userInfo: {
    email: ``,
    bookmarkedIds: [],
  },
};


enum UserAction {
  PENDING_AUTHORIZATION = 'PENDING_AUTHORIZATION',
  LOGIN = 'LOGIN',
  SHOW_LOGIN_NOTICE = 'SHOW_LOGIN_NOTICE',
  HIDE_LOGIN_NOTICE = 'HIDE_LOGIN_NOTICE',
  ADD_TO_BOOKMARKED_IDS = 'ADD_TO_BOOKMARKED_ID',
}


export interface ActionType {
  type: UserAction,
  payload?: string,
}


export const ActionsCreator = {
  pendingAuthorization: (): ActionType => {
    return {
      type: UserAction.PENDING_AUTHORIZATION,
    };
  },
  login: (email: string): ActionType => {
    return {
      type: UserAction.LOGIN,
      payload: email,
    };
  },
  showLoginNotice: (): ActionType => {
    return {
      type: UserAction.SHOW_LOGIN_NOTICE,
    };
  },
  hideLoginNotice: (): ActionType => {
    return {
      type: UserAction.HIDE_LOGIN_NOTICE,
    };
  },
  addToBookmarkedIDs: (id?: string): ActionType => {
    return {
      type: UserAction.ADD_TO_BOOKMARKED_IDS,
      payload: id,
    };
  },
};


export const Operations = {
  login: (email: string) => (dispatch: Dispatch): void => {
    dispatch(ActionsCreator.pendingAuthorization());
    API.login(email)
      .then((response) => {
        dispatch(ActionsCreator.login(response.data.users.email));
      });
  },
  addToBookmarkedIDs: (offer: Offer, id?: string) => (dispatch: any): void => {
    dispatch(ActionsCreator.addToBookmarkedIDs(id));
    dispatch(OffersDataOperations.updateOffers(id, offer));
  },
};

const addIdToBookmarkedID = (bookMarkedIDs: string[], id: any) => {
  const indexOfNewId = bookMarkedIDs.indexOf(id);
  if (indexOfNewId > -1) {
    bookMarkedIDs.splice(indexOfNewId, 1);
  } else {
    bookMarkedIDs.push(id);
  }
  return bookMarkedIDs;
};

export const userReducer = (state: UserState = initialState, action: ActionType): UserState => {
  switch (action.type) {
    case UserAction.PENDING_AUTHORIZATION:
      return Object.assign({}, state, {
        pendingAuthorization: false,
      });
    case UserAction.LOGIN:
      return Object.assign({}, state, {
        pendingAuthorization: false,
        isLoggedIn: true,
        userInfo: {
          email: action.payload,
          bookmarkedIds: state.userInfo.bookmarkedIds
        }
      });
    case UserAction.SHOW_LOGIN_NOTICE:
      return Object.assign({}, state, {
        isLoginNoticeShowed: true,
      });
    case UserAction.HIDE_LOGIN_NOTICE:
      return Object.assign({}, state, {
        isLoginNoticeShowed: false,
      });
    case UserAction.ADD_TO_BOOKMARKED_IDS:
      return Object.assign({}, state, {
        userInfo: {
          email: state.userInfo.email,
          bookmarkedIds: addIdToBookmarkedID(state.userInfo.bookmarkedIds.slice(), action.payload),
        }
      });
    default:
      return state;
  }
};
