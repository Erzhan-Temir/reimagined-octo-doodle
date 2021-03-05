import React from 'react';
import {Offer} from '../../types/offers-data';
import {ActionType} from '../../reducers/offers-data/offers-data';
import {placeCardImageTypes} from '../../constants/constants';
import PlaceCardImage from '../place-card-image/place-card-image';
import PlaceCardDetails from '../place-card-details/place-card-details';

interface Props {
  offer: Offer;
  setActiveOffer: (id: null | string | undefined) => ActionType,
}

const PlaceCardItem = (props: Props): JSX.Element => {

  const {
    setActiveOffer,
    offer: {
      id,
      isPremium,
      image,
    }
  } = props;

  const premiumBadge = (
    <div className="place-card__mark">
      <span>Premium</span>
    </div>
  );

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

        <PlaceCardImage image={image} type={placeCardImageTypes.mainBoard} />

      </div>
      <div className="place-card__info">

        <PlaceCardDetails offer={props.offer} />

      </div>
    </article>
  );
};

export default PlaceCardItem;
