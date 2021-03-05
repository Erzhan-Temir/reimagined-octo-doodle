import React from 'react';
import {useSelector} from 'react-redux';
import {getFavoritesCitiesList, getFavoritesListLength} from '../../reducers/user/user-selectors';
import FavoritesEmpty from '../favorites-empty/favorites-empty';
import FavoritesLocationBoard from '../favorites-location-board/favorites-location-board';
import Header from '../header/header';


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
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width={64} height={33} />
        </a>
      </footer>
    </div>
  );
};

export default PageFavorites;
