import React from 'react';
import {getSortedOffers} from '../../reducers/offers-data/offers-data-selectors';
import PlaceCardItem from '../place-card-item/place-card-item';
import {useSelector} from 'react-redux';


const PlaceCardList = (): JSX.Element => {
  const offers = useSelector(getSortedOffers);

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
