import React from 'react';
import {placeCardImageSize} from '../../constants/constants';

interface Props {
  image: string;
  type: string
}

const PlaceCardImage = (props: Props): JSX.Element => {

  const {image, type} = props;

  return (
    <a href="#">
      <img className="place-card__image" src={image} width={placeCardImageSize[type].width} height={placeCardImageSize[type].height} alt="Place image" />
    </a>
  );
};

export default PlaceCardImage;
