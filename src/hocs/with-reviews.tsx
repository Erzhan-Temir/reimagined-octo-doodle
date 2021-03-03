/* eslint-disable @typescript-eslint/no-explicit-any */
import React, {FunctionComponent, ComponentType} from 'react';
import {ConnectedProps, connect} from 'react-redux';
import {bindActionCreators, Dispatch} from 'redux';
import {ActionsCreator, Operations} from '../reducers/reviews/reviews';
import {RootState} from '../reducers/root-reducer';
import filterSelector from '../selectors/review-selector';
import {Review} from '../types/review-data';


interface InjectedProps {
  reviews: Review[];
  setCurrentReviewsID: (reviewIDs: number[]) => void;
}


const mapStateToProps = ({reviews}: RootState) => {
  return {
    isLoading: reviews.isLoading,
    reviewsList: filterSelector(reviews),
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators({
    fetchReviews: Operations.fetchReviews(),
    setCurrentReviewsID: ActionsCreator.setCurrentReviewsID,
  }, dispatch);
};

export const connector = connect(mapStateToProps, mapDispatchToProps);

type ReduxProps = ConnectedProps<typeof connector>;

export const withReviews = <BaseProps extends InjectedProps>(BaseComponent: ComponentType<BaseProps>): FunctionComponent => {

  const WithReviews: FunctionComponent<BaseProps & ReduxProps> = (props) => {
    return (
      <BaseComponent {...(props as BaseProps)} />
    );
  };

  return connector(WithReviews as any);
};
