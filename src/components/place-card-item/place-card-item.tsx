import React from 'react';
import {ActionsCreator} from '../../reducers/offers-data/offers-data';
import {Offer} from '../../types/offers-data';
import {placeCardImageTypes} from '../../constants/constants';
import PlaceCardImage from '../place-card-image/place-card-image';
import PlaceCardDetails from '../place-card-details/place-card-details';
import {useDispatch} from 'react-redux';


interface Props {
  offer: Offer;
}


const PlaceCardItem = (props: Props): JSX.Element => {
  const dispatch = useDispatch();

  const {offer: {id, isPremium, image}} = props;


  const premiumBadge = (
    <div className="place-card__mark">
      <span>Premium</span>
    </div>
  );


  const handleMouseHoverEnter = (): void => {
    dispatch(ActionsCreator.setActiveOffer(id));
  };

  const handleMouseHoverLeave = (): void => {
    dispatch(ActionsCreator.setActiveOffer(``));
  };


  return (
    <article
      onMouseEnter={handleMouseHoverEnter}
      onMouseLeave={handleMouseHoverLeave}
      className="cities__place-card place-card"
    >
      {
        isPremium ? premiumBadge : ``
      }
      <div className="cities__image-wrapper place-card__image-wrapper">
        <PlaceCardImage image={image} id={id} type={placeCardImageTypes.mainBoard} />
      </div>
      <div className="place-card__info">
        <PlaceCardDetails offer={props.offer} />
      </div>
    </article>
  );
};

export default PlaceCardItem;
