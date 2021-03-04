/* eslint-disable @typescript-eslint/no-explicit-any */
import React, {FunctionComponent, ComponentType} from 'react';
import {ConnectedProps, connect} from 'react-redux';
import {Operations, ActionType} from '../reducers/reviews/reviews';
import {bindActionCreators, Dispatch} from 'redux';
// import {Review} from '../types/review-data';
import {Offer} from '../types/offers-data';
// import {RootState} from '../reducers/root-reducer';


interface InjectedProps {
  currentOfferId: string;
  addReview: (newReviewData: {
    commentText: string,
    rating: number,
    author: string,
  }, offer: Offer) => ActionType;
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators({
    addReview: Operations.addReview(),
  }, dispatch);
};

export const connector = connect(null, mapDispatchToProps);

type ReduxProps = ConnectedProps<typeof connector>;

export const withAddReview = <BaseProps extends InjectedProps>(BaseComponent: ComponentType<BaseProps>): FunctionComponent => {

  const WithAddReview: FunctionComponent<BaseProps & ReduxProps> = (props) => {
    return (
      <BaseComponent {...(props as BaseProps)} />
    );
  };

  return connector(WithAddReview as any);
};
