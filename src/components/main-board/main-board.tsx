import React, {useEffect} from 'react';
import {compose} from 'redux';
import Sorting from '../sorting/sorting';
import PlaceCardList from '../place-card-list/place-card-list';
import Map from '../map/map';
import {Offer} from '../../types/offers-data';
import LoadingStub from '../loading-stub/loading-stub';
import {withLoadData} from '../../hocs/with-load-data';
import {withCurrentCity} from '../../hocs/with-current-city';
import {withOffers} from '../../hocs/with-offers';
import Tabs from '../tabs/tabs';

interface Props {
  isLoading: boolean,
  offers: Offer[],
  currentCity: string,
  fetchOffers: () => Promise<[]>,
}


const MainBoard = (props: Props): JSX.Element => {
  const {isLoading, offers, currentCity, fetchOffers} = props;

  useEffect(() => {
    fetchOffers();
  }, []);

  if (isLoading) {
    return <LoadingStub />;
  }

  return (

    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>

      <Tabs />

      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{offers.length} places to stay in {currentCity}</b>
            <Sorting />
            <PlaceCardList />
          </section>
          <div className="cities__right-section">
            <section className="cities__map map">
              <Map />
            </section>
          </div>
        </div>
      </div>

    </main>


  );
};

export default compose<React.FunctionComponent>(withLoadData, withCurrentCity, withOffers)(MainBoard);
