import React from 'react';
import PlaceCardItem from '../place-card-item/place-card-item';
import {Offer} from '../../types/offers';

type Props = {
  offers: Offer[],
}

const PlaceCardList = (props: Props): JSX.Element => {
  const {offers} = props;

  return (
    <div className="cities__places-list places__list tabs__content">

      {
        offers.map((offer) => {
          return <PlaceCardItem key={offer.id} offer={offer} />;
        })
      }

    </div>
  );
};

export default PlaceCardList;
