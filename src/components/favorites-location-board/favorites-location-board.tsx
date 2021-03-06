import React from 'react';
import {getFavoritesOffersFromCity} from '../../reducers/user/user-selectors';
import {placeCardImageTypes} from '../../constants/constants';
import PlaceCardDetails from '../place-card-details/place-card-details';
import PlaceCardImage from '../place-card-image/place-card-image';
import {useSelector} from 'react-redux';

interface Props {
  city: string;
}

const FavoritesLocationBoard = (props: Props): JSX.Element => {

  const {city} = props;
  const offers = useSelector(getFavoritesOffersFromCity(city));

  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{city}</span>
          </a>
        </div>
      </div>

      <div className="favorites__places">
        {
          offers.map((offer) => {
            return (
              <article key={offer.id} className="favorites__card place-card">
                <div className="favorites__image-wrapper place-card__image-wrapper">
                  <PlaceCardImage image={offer.image} id={offer.id} type={placeCardImageTypes.favoriteBoard} />
                </div>

                <div className="favorites__card-info place-card__info">
                  <PlaceCardDetails offer={offer} />
                </div>
              </article>
            );
          })
        }
      </div>
    </li>
  );
};

export default FavoritesLocationBoard;
