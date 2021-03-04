import {UserState} from '../../types/user-data';
import {Dispatch} from 'redux';
import API from '../../services/api';

const initialState: UserState = {
  isLoggedIn: false,
  pendingAuthorization: true,
  userInfo: {
    email: ``,
    bookmarkedIds: [],
  },
  isLoginNoticeShowed: false,
};


enum UserAction {
  PENDING_AUTHORIZATION = 'PENDING_AUTHORIZATION',
  LOGIN = 'LOGIN',
  SHOW_LOGIN_NOTICE = 'SHOW_LOGIN_NOTICE',
  HIDE_LOGIN_NOTICE = 'HIDE_LOGIN_NOTICE',
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
};


export const Operations = {
  login: () => (email: string) => (dispatch: Dispatch): void => {
    dispatch(ActionsCreator.pendingAuthorization());
    API.login(email)
      .then((response) => {
        dispatch(ActionsCreator.login(response.data.users.email));
      });
  },
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
    default:
      return state;
  }
};
