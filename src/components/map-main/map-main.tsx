import React from 'react';
import Map from '../map/map';
import {Offer} from '../../types/offers-data';

type Props = {
  offers: Offer[],
  currentCity: string,
  activeOfferId: null|string,
};

const MapMain = (props: Props): JSX.Element => {

  const {offers, currentCity, activeOfferId} = props;

  return (
    <div className="cities__right-section">
      <section className="cities__map map">
        <Map offers={offers} currentCity={currentCity} activeOfferId={activeOfferId} />
      </section>
    </div>
  );
};

export default MapMain;
