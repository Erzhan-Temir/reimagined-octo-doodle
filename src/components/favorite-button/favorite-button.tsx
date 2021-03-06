import React from 'react';
import {ActionType} from '../../reducers/user/user';
import {compose} from 'redux';
import classNames from 'classnames';
import {getLoginInfo} from '../../reducers/user/user-selectors';
import {favoriteButtonClass} from '../../constants/constants';
import {Operations} from '../../reducers/user/user';
import {Offer} from '../../types/offers-data';
import {useDispatch, useSelector} from 'react-redux';
import {withLoginNotice} from '../../hocs/with-login-notice';

interface Props {
  offer: Offer;
  type: string
}

interface InjectedProps {
  showLoginNotice: () => ActionType;
}

const FavoriteButton = (props: Props & InjectedProps): JSX.Element => {
  const {offer, offer: {id, isBookmarked}, type, showLoginNotice} = props;

  const isLoggedIn = useSelector(getLoginInfo);
  const dispatch = useDispatch();


  const bookmarkActiveClass = `place-card__bookmark-button--active`;
  const classNamesData = favoriteButtonClass[type];

  const handleFavoriteClick = () => {
    if (!isLoggedIn) {
      showLoginNotice();
      return;
    }

    dispatch(Operations.addToBookmarkedIDs(offer, id));
  };

  return (
    <button
      onClick={handleFavoriteClick}
      className={classNames({
        button: true,
        [classNamesData.main]: true,
        [bookmarkActiveClass]: isBookmarked
      })}
      type="button"
    >
      <svg className="place-card__bookmark-icon" width={classNamesData.iconSize} height={classNamesData.iconSize}>
        <use xlinkHref="#icon-bookmark" />
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
};

export default compose<React.FunctionComponent<Props>>(withLoginNotice)(FavoriteButton);
