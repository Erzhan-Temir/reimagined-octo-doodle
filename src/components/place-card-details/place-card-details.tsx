import React, {Fragment} from 'react';
import {withRouter} from 'react-router-dom';
import {RouteComponentProps} from 'react-router';
import {favoriteButtonsNames} from '../../constants/constants';
import {Offer} from '../../types/offers-data';
import FavoriteButton from '../favorite-button/favorite-button';

interface Props extends RouteComponentProps {
  offer: Offer;
}

const PlaceCardDetails = (props: Props): JSX.Element => {

  const {offer} = props;
  const {id, price, rating, heading, type} = offer;

  const onPlaceCardNameClick = (evt: React.SyntheticEvent) => {
    evt.preventDefault();
    props.history.push(`/${id}`);
  };

  return (
    <Fragment>
      <div className="place-card__price-wrapper">
        <div className="place-card__price">
          <b className="place-card__price-value">€{price}</b>
          <span className="place-card__price-text">/&nbsp;night</span>
        </div>
        <FavoriteButton offer={props.offer} type={favoriteButtonsNames.placeCard} />
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
    </Fragment>
  );
};

export default withRouter(PlaceCardDetails);
