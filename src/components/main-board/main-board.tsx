import React, {useEffect} from 'react';
import Sorting from '../sorting/sorting';
import PlaceCardList from '../place-card-list/place-card-list';
import MapMain from '../map-main/map-main';
import {Offer} from '../../types/offers';
import {ChangeSorting} from '../../types/actions';

type Props = {
  isLoading: boolean,
  offers: Offer[],
  currentCity: string,
  sorting: string
  fetchOffers: () => Promise<[]>,
  changeSorting: (sorting: string) => ChangeSorting,
}

const MainBoard = (props: Props): JSX.Element => {
  const {isLoading, offers, currentCity, sorting, fetchOffers, changeSorting} = props;

  useEffect(() => {
    fetchOffers();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{offers.length} places to stay in {currentCity}</b>
          <Sorting currentSorting={sorting} changeSorting={changeSorting} />
          <PlaceCardList offers={offers} />
        </section>
        <MapMain offers={offers} currentCity={currentCity} />
      </div>
    </div>
  );
};

export default MainBoard;
