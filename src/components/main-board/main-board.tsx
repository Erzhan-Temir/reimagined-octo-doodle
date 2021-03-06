import React, {useEffect} from 'react';
import {compose} from 'redux';
import {getCurrentCity, getSortedOffers, isOffersLoading} from '../../reducers/offers-data/offers-data-selectors';
import LoadingStub from '../loading-stub/loading-stub';
import Map from '../map/map';
import MainBoardEmpty from '../main-board-empty/main-board-empty';
import {Operations} from '../../reducers/offers-data/offers-data';
import {useDispatch, useSelector} from 'react-redux';
import PlaceCardList from '../place-card-list/place-card-list';
import Sorting from '../sorting/sorting';
import Tabs from '../tabs/tabs';
import withErrorBoundary from '../../hocs/with-error-boundary';


const MainBoard = (): JSX.Element => {
  const dispatch = useDispatch();

  const offers = useSelector(getSortedOffers);
  const isLoading = useSelector(isOffersLoading);
  const currentCity = useSelector(getCurrentCity);

  useEffect(() => {
    dispatch(Operations.fetchOffers);
  }, []);


  if (isLoading) {
    return <LoadingStub />;
  }


  if (offers.length === 0) {
    return <MainBoardEmpty currentCity={currentCity} />;
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

export default compose<React.FunctionComponent>(withErrorBoundary)(MainBoard);
