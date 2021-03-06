import React, {useEffect} from 'react';
import LoadingStub from '../loading-stub/loading-stub';
import ReviewItem from '../review-item/review-item';
import ReviewAddForm from '../review-add-form/review-add-form';
import {useDispatch, useSelector} from 'react-redux';
import {getOffer} from '../../reducers/offers-data/offers-data-selectors';
import {getLoginInfo} from '../../reducers/user/user-selectors';
import {getReviews, isReviewsLoading} from '../../reducers/reviews/reviews-selectors';
import {ActionsCreator, Operations} from '../../reducers/reviews/reviews';


const ReviewsBoard = (): JSX.Element => {
  const dispatch = useDispatch();

  const reviewsList = useSelector(getReviews);
  const isLoading = useSelector(isReviewsLoading);
  const isLoggedIn = useSelector(getLoginInfo);
  const offer = useSelector(getOffer);


  useEffect(() => {
    dispatch(ActionsCreator.setCurrentReviewsID(offer.reviewIDs));
    dispatch(Operations.fetchReviews);
  }, [offer]);


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

export default ReviewsBoard;
