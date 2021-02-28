import React, {useEffect} from 'react';
import Sorting from '../sorting/sorting';
import PlaceCardList from '../place-card-list/place-card-list';
import MapMain from '../map-main/map-main';
import {Offer} from '../../types/offers';
import {ChangeSorting, SetActiveOffer} from '../../types/actions';

type Props = {
  isLoading: boolean,
  offers: Offer[],
  currentCity: string,
  sorting: string,
  activeOfferId: null|string,
  fetchOffers: () => Promise<[]>,
  changeSorting: (sorting: string) => ChangeSorting,
  setActiveOffer: (id: null|string|undefined) => SetActiveOffer,
}

const MainBoard = (props: Props): JSX.Element => {
  const {isLoading, offers, currentCity, sorting, activeOfferId, fetchOffers, changeSorting, setActiveOffer} = props;

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
          <PlaceCardList offers={offers} setActiveOffer={setActiveOffer} />
        </section>
        <MapMain offers={offers} currentCity={currentCity} activeOfferId={activeOfferId} />
      </div>
    </div>
  );
};

export default MainBoard;
