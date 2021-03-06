import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {compose} from 'redux';
import {favoriteButtonClass} from '../../constants/constants';
import {withLoginNotice} from '../../hocs/with-login-notice';
import {Operations} from '../../reducers/user/user';
import {ActionType} from '../../reducers/user/user';
import {getLoginInfo} from '../../reducers/user/user-selectors';
import {Offer} from '../../types/offers-data';

interface Props {
  offer: Offer;
  type: string
}

interface InjectedProps {
  showLoginNotice: () => ActionType;
}

const FavoriteButton = (props: Props & InjectedProps): JSX.Element => {
  const {offer, type, showLoginNotice} = props;
  const {id, isBookmarked} = offer;

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

export default compose<React.FunctionComponent<Props>>(withLoginNotice)(FavoriteButton);
