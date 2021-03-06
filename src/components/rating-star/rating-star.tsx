import React, {Fragment} from 'react';
import {RatingStarType} from '../../types/utils';


interface Props {
  setRating: (rating: number) => void;
  ratingStar: RatingStarType;
}


const RatingStar = (props: Props): JSX.Element => {
  const {ratingStar: {name, value}, setRating} = props;

  return (
    <Fragment>
      <input
        onChange={() => setRating(value)}
        className="form__rating-input visually-hidden"
        name="rating"
        value={value}
        id={name}
        type="radio"
      />
      <label htmlFor={name} className="reviews__rating-label form__rating-label" title="perfect">
        <svg className="form__star-image" width={37} height={33}>
          <use xlinkHref="#icon-star" />
        </svg>
      </label>
    </Fragment>
  );
};

export default RatingStar;
