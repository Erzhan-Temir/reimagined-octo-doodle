import React from 'react';
import {favoriteButtonClass} from '../../constants/constants';

interface Props {
  isBookmarked: boolean;
  type: string
}

const FavoriteButton = (props: Props): JSX.Element => {

  const {isBookmarked, type} = props;

  const bookmarkActiveClass = `place-card__bookmark-button--active`;

  const classNamesData = favoriteButtonClass[type];

  return (
    <button
      className={
        `${classNamesData.main} button ${isBookmarked ? bookmarkActiveClass : ``}`
      }
      type="button"
    >
      <svg className="place-card__bookmark-icon" width={classNamesData.iconSize} height={classNamesData.iconSize}>
        <use xlinkHref="#icon-bookmark" />
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
};

export default FavoriteButton;
