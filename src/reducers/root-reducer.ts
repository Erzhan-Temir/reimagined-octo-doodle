import {combineReducers} from 'redux';
import {userReducer} from './user/user';
import {offersDataReducer} from './offers-data/offers-data';


export const rootReducer = combineReducers({
  offersData: offersDataReducer,
  user: userReducer
});


export type RootState = ReturnType<typeof rootReducer>;
