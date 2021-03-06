import React from 'react';
import Tabs from '../tabs/tabs';

interface Props {
  currentCity: string;
}

const MainBoardEmpty = (props: Props): JSX.Element => {

  const {currentCity} = props;

  return (
    <main className="page__main page__main--index page__main--index-empty">
      <h1 className="visually-hidden">Cities</h1>
      <Tabs />
      <div className="cities">
        <div className="cities__places-container cities__places-container--empty container">
          <section className="cities__no-places">
            <div className="cities__status-wrapper tabs__content">
              <b className="cities__status">No places to stay available</b>
              <p className="cities__status-description">We could not find any property availbale at the moment in {currentCity}</p>
            </div>
          </section>
          <div className="cities__right-section" />
        </div>
      </div>
    </main>
  );
};

export default MainBoardEmpty;
