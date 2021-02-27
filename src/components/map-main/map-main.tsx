import React from 'react';
import Map from '../map/map';
import {Offer} from '../../types/offers';

type Props = {
  offers: Offer[],
};

const MapMain = (props: Props): JSX.Element => {
  return (
    <div className="cities__right-section">
      <section className="cities__map map">
        <Map offers={props.offers}/>
      </section>
    </div>
  );
};

export default MapMain;
