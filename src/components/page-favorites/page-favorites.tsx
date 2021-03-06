import React from 'react';
import FavoritesEmpty from '../favorites-empty/favorites-empty';
import FavoritesLocationBoard from '../favorites-location-board/favorites-location-board';
import Footer from '../footer/footer';
import {getFavoritesCitiesList, getFavoritesListLength} from '../../reducers/user/user-selectors';
import Header from '../header/header';
import {useSelector} from 'react-redux';


const PageFavorites = (): JSX.Element => {
  const favoritesListLength = useSelector(getFavoritesListLength);
  const favoritesCitiesList = useSelector(getFavoritesCitiesList);


  if (favoritesListLength === 0) {
    return <FavoritesEmpty />;
  }


  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {
                favoritesCitiesList.map((city) => <FavoritesLocationBoard key={city} city={city} />)
              }
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PageFavorites;
