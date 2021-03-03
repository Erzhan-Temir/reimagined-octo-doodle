import React, {useEffect} from 'react';
import {compose} from 'redux';
import {withLoginInfo} from '../../hocs/with-login-info';
import {withReviews} from '../../hocs/with-reviews';
import {Review} from '../../types/review-data';
import LoadingStub from '../loading-stub/loading-stub';
import ReviewItem from '../review-item/review-item';
import ReviewAddForm from '../review-add-form/review-add-form';

interface InjectedProps {
  reviewIDs: number[];
}

interface Props {
  isLoading: boolean;
  isLoggedIn: boolean;
  reviewsList: Review[];
  setCurrentReviewsID: (reviewIDs: number[]) => void;
  fetchReviews: () => void;
}

const ReviewsBoard = (props: Props & InjectedProps): JSX.Element => {
  const {isLoading, isLoggedIn, reviewsList, setCurrentReviewsID, fetchReviews, reviewIDs} = props;

  useEffect(() => {
    setCurrentReviewsID(reviewIDs);
    fetchReviews();
  }, [reviewIDs]);


  if (isLoading) {
    return <LoadingStub />;
  }

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews · <span className="reviews__amount">{reviewsList.length}</span></h2>
      <ul className="reviews__list">
        {
          reviewsList.map((review) => {
            return <ReviewItem key={review.id} review={review} />;
          })
        }
      </ul>
      {
        isLoggedIn ? <ReviewAddForm /> : ``
      }
    </section>
  );
};

export default compose<React.FunctionComponent<InjectedProps>>(withReviews, withLoginInfo)(ReviewsBoard);
