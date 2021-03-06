import React from 'react';
import FavoriteButton from '../favorite-button/favorite-button';
import {favoriteButtonsNames} from '../../constants/constants';
import {getOffer} from '../../reducers/offers-data/offers-data-selectors';
import PlaceCardList from '../place-card-list/place-card-list';
import Map from '../map/map';
import ReviewsBoard from '../reviews-board/reviews-board';
import {useSelector} from 'react-redux';


// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const PageDetailsBoard = () => {
  const offer = useSelector(getOffer);


  if (!offer) {
    return null;
  }


  const {
    isPremium,
    price,
    rating,
    heading,
    type,
    details: {
      bedrooms,
      occupation,
      features,
      host,
    }
  } = offer;

  const premiumBadge = (
    <div className="property__mark">
      <span>Premium</span>
    </div>
  );

  const ratingNumber = (rating * 5) / 100;

  return (
    <main className="page__main page__main--property">
      <section className="property">
        <div className="property__gallery-container container">
          <div className="property__gallery">
            <div className="property__image-wrapper">
              <img className="property__image" src="img/room.jpg" alt="Photo studio" />
            </div>
            <div className="property__image-wrapper">
              <img className="property__image" src="img/apartment-01.jpg" alt="Photo studio" />
            </div>
            <div className="property__image-wrapper">
              <img className="property__image" src="img/apartment-02.jpg" alt="Photo studio" />
            </div>
            <div className="property__image-wrapper">
              <img className="property__image" src="img/apartment-03.jpg" alt="Photo studio" />
            </div>
            <div className="property__image-wrapper">
              <img className="property__image" src="img/studio-01.jpg" alt="Photo studio" />
            </div>
            <div className="property__image-wrapper">
              <img className="property__image" src="img/apartment-01.jpg" alt="Photo studio" />
            </div>
          </div>
        </div>
        <div className="property__container container">
          <div className="property__wrapper">

            {
              isPremium ? premiumBadge : ``
            }

            <div className="property__name-wrapper">
              <h1 className="property__name">
                {heading}
              </h1>

              <FavoriteButton offer={offer} type={favoriteButtonsNames.pageDetails} />

            </div>
            <div className="property__rating rating">
              <div className="property__stars rating__stars">
                <span style={{width: `${rating}%`}} />
                <span className="visually-hidden">Rating</span>
              </div>
              <span className="property__rating-value rating__value">{ratingNumber}</span>
            </div>
            <ul className="property__features">
              <li className="property__feature property__feature--entire">
                {type}
              </li>
              <li className="property__feature property__feature--bedrooms">
                {bedrooms} Bedrooms
              </li>
              <li className="property__feature property__feature--adults">
                Max {occupation} adults
              </li>
            </ul>
            <div className="property__price">
              <b className="property__price-value">€{price}</b>
              <span className="property__price-text">&nbsp;night</span>
            </div>
            <div className="property__inside">
              <h2 className="property__inside-title">What`s inside</h2>
              <ul className="property__inside-list">

                {
                  features.map((feature: string) => {
                    return (
                      <li key={feature} className="property__inside-item">
                        {feature}
                      </li>
                    );
                  })
                }

              </ul>
            </div>
            <div className="property__host">
              <h2 className="property__host-title">Meet the host</h2>
              <div className="property__host-user user">
                <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                  <img className="property__avatar user__avatar" src={host.avatar} width={74} height={74} alt="Host avatar" />
                </div>
                <span className="property__user-name">
                  {host.name}
                </span>
                <span className="property__user-status">
                  {host.rating}
                </span>
              </div>
              <div className="property__description">
                <p className="property__text">
                  A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.
                </p>
                <p className="property__text">
                  An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.
                </p>
              </div>
            </div>

            <ReviewsBoard />

          </div>
        </div>
        <section className="property__map map">
          <Map />
        </section>
      </section>
      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">Other places in the neighborhood</h2>

          <PlaceCardList />

        </section>
      </div>
    </main>
  );
};

export default PageDetailsBoard;
