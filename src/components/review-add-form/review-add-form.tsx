import React, {useState} from 'react';
import {ratingStars} from '../../constants/constants';
import RatingStar from '../rating-star/rating-star';
import {Operations} from '../../reducers/reviews/reviews';
import {useDispatch, useSelector} from 'react-redux';
import {getOffer} from '../../reducers/offers-data/offers-data-selectors';
import {getUserInfo} from '../../reducers/user/user-selectors';

const ReviewAddForm = (): JSX.Element => {
  const dispatch = useDispatch();
  const offer = useSelector(getOffer);

  const userInfo = useSelector(getUserInfo);

  const [commentText, setCommentText] = useState(``);
  const [rating, setRating] = useState(0);

  const handleSubmit = (evt: React.SyntheticEvent) => {
    evt.preventDefault();

    dispatch(Operations.addReview({
      text: commentText,
      rating,
      author: userInfo.email,
    }, offer));
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
        className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved"
        minLength={20}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">20 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit">Submit</button>
      </div>
    </form>
  );
};

export default ReviewAddForm;
