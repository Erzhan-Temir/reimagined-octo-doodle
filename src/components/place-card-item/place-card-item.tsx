import React from 'react';
import {Offer} from '../../types/offers-data';
import {withRouter} from 'react-router-dom';
import {RouteComponentProps} from 'react-router';
import {ActionType} from '../../reducers/offers-data/offers-data';

interface Props extends RouteComponentProps {
  offer: Offer;
  setActiveOffer: (id: null|string|undefined) => ActionType,
}

const PlaceCardItem = (props: Props) => {

  const {
    setActiveOffer,
    offer: {
      id,
      isPremium,
      image,
      price,
      isBookmarked,
      rating,
      heading,
      type
    }
  } = props;

  const premiumBadge: JSX.Element = (
    <div className="place-card__mark">
      <span>Premium</span>
    </div>
  );

  const bookmarkActiveClass = `place-card__bookmark-button--active`;

  const onPlaceCardNameClick = (evt: React.SyntheticEvent) => {
    evt.preventDefault();
    props.history.push(`/${id}`);
  };

  const handleMouseHoverEnter = (): void => {
    setActiveOffer(id);
  };

  const handleMouseHoverLeave = (): void => {
    setActiveOffer(null);
  };

  return (
    <article
      onMouseEnter={handleMouseHoverEnter}
      onMouseLeave={handleMouseHoverLeave}
      className="cities__place-card place-card"
    >

      {
        isPremium ? premiumBadge : ``
      }

      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={image} width={260} height={200} alt="Place image" />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button
            className={
              `place-card__bookmark-button button ${isBookmarked ? bookmarkActiveClass : ``}`
            }
            type="button"
          >
            <svg className="place-card__bookmark-icon" width={18} height={19}>
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${rating}%`}} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a
            onClick={onPlaceCardNameClick}
          >{heading}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

export default withRouter(PlaceCardItem);
