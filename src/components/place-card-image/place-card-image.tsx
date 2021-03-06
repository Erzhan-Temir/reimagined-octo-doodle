import React from 'react';
import {placeCardImageSize} from '../../constants/constants';
import {withRouter} from 'react-router-dom';
import {RouteComponentProps} from 'react-router';

interface Props extends RouteComponentProps {
  image: string;
  id?: string;
  type: string;
}

const PlaceCardImage = (props: Props): JSX.Element => {

  const {image, type, id} = props;

  const onPlaceCardImageClick = (evt: React.SyntheticEvent) => {
    evt.preventDefault();
    props.history.push(`/${id}`);
  };

  return (
    <a
      onClick={onPlaceCardImageClick}
      href="#"
    >
      <img className="place-card__image" src={image} width={placeCardImageSize[type].width} height={placeCardImageSize[type].height} alt="Place image" />
    </a>
  );
};

export default withRouter(PlaceCardImage);
