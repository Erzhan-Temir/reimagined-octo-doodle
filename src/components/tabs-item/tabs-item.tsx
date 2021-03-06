import React from 'react';
import {ActionsCreator} from '../../reducers/offers-data/offers-data';
import {useDispatch} from 'react-redux';

interface Props {
  cityName: string;
  classList: string;
}


const TabsItem = (props: Props): JSX.Element => {
  const dispatch = useDispatch();

  const {cityName, classList} = props;

  const handleChangeCity = (evt: React.SyntheticEvent) => {
    evt.preventDefault();
    dispatch(ActionsCreator.changeCity(cityName));
  };

  return (
    <li className="locations__item">
      <a
        onClick={handleChangeCity}
        className={classList}
        href="#"
      >
        <span>{cityName}</span>
      </a>
    </li>
  );
};

export default TabsItem;
