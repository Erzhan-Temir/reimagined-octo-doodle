import React, {useState} from 'react';
import {compose} from 'redux';
import {ratingStars} from '../../constants/constants';
import {withAddReview} from '../../hocs/with-add-review';
import RatingStar from '../rating-star/rating-star';
import {ActionType} from '../../reducers/reviews/reviews';
import {withCurrentOffer} from '../../hocs/with-current-offer';
import {Offer} from '../../types/offers-data';
import {Review} from '../../types/review-data';
import {withUserInfo} from '../../hocs/with-user-info';
import {UserInfo} from '../../types/user-data';

interface Props {
  currentOfferId: string;
  offer: Offer;
  userInfo: UserInfo;
  addReview: (newReview: Review, offer: Offer) => ActionType;
}

const ReviewAddForm = (props: Props): JSX.Element => {

  const createReview = (commentText: string, rating: number, author: string) => { // ref
    return {
      avatar: `../img/avatar.svg`,
      author,
      text: commentText,
      date: (new Date()).toString(),
      rating: rating * 100 / 5,
    };
  };

  const {addReview, offer, userInfo} = props;

  const [commentText, setCommentText] = useState(``);
  const [rating, setRating] = useState(0);

  const handleSubmit = (evt: React.SyntheticEvent) => {
    evt.preventDefault();

    const newReview = createReview(commentText, rating, userInfo.email);

    addReview(newReview, offer);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="reviews__form form"
      action="#"
      method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">

        {
          ratingStars.map((ratingStar) => {
            return (
              <RatingStar key={ratingStar.name} ratingStar={ratingStar} setRating={setRating} />
            );
          })
        }

      </div>
      <textarea
        value={commentText}
        onChange={(evt) => setCommentText(evt.target.value)}
        className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved" />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit">Submit</button>
      </div>
    </form>
  );
};

export default compose<React.FunctionComponent>(withAddReview, withCurrentOffer, withUserInfo)(ReviewAddForm);
