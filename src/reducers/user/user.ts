import {UserState} from '../../types/user-reducer';
import {Dispatch} from 'redux';
import API from '../../services/api';

const initialState: UserState = {
  isLoggedIn: false,
  pendingAuthorization: true,
  userInfo: {
    email: null,
    bookmarkedIds: null,
  },
};


enum UserAction {
  PENDING_AUTHORIZATION = 'PENDING_AUTHORIZATION',
  LOGIN = 'LOGIN',
}


interface ActionType {
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
  }
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
        }
      });
      break;
    default:
      return state;
  }
};
