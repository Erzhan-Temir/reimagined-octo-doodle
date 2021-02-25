import React from 'react';
import Sorting from '../sorting/sorting';
import PlaceCardList from '../place-card-list/place-card-list';
import MapMain from '../map-main/map-main';

const MainBoard = () => {
  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">312 places to stay in Amsterdam</b>
          <Sorting />
          <PlaceCardList />
        </section>
        <MapMain />
      </div>
    </div>
  );
};

export default MainBoard;
