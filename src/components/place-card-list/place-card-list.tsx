import React from 'react';
import PlaceCardItem from '../place-card-item/place-card-item';
import {Offer} from '../../types/offers-data';
import {ActionType} from '../../reducers/offers-data/offers-data';

type Props = {
  offers: Offer[],
  setActiveOffer: (id: null|string|undefined) => ActionType,
}

const PlaceCardList = (props: Props): JSX.Element => {
  const {offers, setActiveOffer} = props;

  return (
    <div className="cities__places-list places__list tabs__content">

      {
        offers.map((offer) => {
          return <PlaceCardItem key={offer.id} offer={offer} setActiveOffer={setActiveOffer} />;
        })
      }

    </div>
  );
};

export default PlaceCardList;
