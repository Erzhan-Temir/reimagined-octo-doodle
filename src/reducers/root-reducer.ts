import {combineReducers} from 'redux';
import {userReducer} from './user/user';
import {offersDataReducer} from './offers-data/offers-data';
import {reviewsReducer} from './reviews/reviews';


export const rootReducer = combineReducers({
  offersData: offersDataReducer,
  user: userReducer,
  reviews: reviewsReducer,
});


export type RootState = ReturnType<typeof rootReducer>;
