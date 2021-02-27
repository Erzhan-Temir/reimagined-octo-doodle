import React from 'react';
import Map from '../map/map';
import {Offer} from '../../types/offers';

type Props = {
  offers: Offer[],
  currentCity: string,
};

const MapMain = (props: Props): JSX.Element => {

  const {offers, currentCity} = props;

  return (
    <div className="cities__right-section">
      <section className="cities__map map">
        <Map offers={offers} currentCity={currentCity} />
      </section>
    </div>
  );
};

export default MapMain;
