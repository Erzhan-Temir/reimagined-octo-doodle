import React from 'react';
import {compose} from 'redux';
import Map from '../map/map';
import {Offer} from '../../types/offers-data';
import {withActiveOfferId} from '../../hocs/with-active-offer-id';
import {withCurrentCity} from '../../hocs/with-current-city';
import {withOffers} from '../../hocs/with-offers';

interface Props {
  offers: Offer[],
  currentCity: string,
  activeOfferId: null|string,
}

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

export default compose<React.FunctionComponent>(withActiveOfferId, withCurrentCity, withOffers)(MapMain);
