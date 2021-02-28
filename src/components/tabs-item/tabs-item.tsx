import React from 'react';
import {ActionType} from '../../reducers/offers-data/offers-data';

type Props = {
  cityName: string,
  classList: string,
  changeCity: (city: string) => ActionType,
};

const TabsItem = (props: Props): JSX.Element => {
  const {cityName, classList, changeCity} = props;

  const handleChangeCity = (evt: React.SyntheticEvent) => {
    evt.preventDefault();
    changeCity(cityName);
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
