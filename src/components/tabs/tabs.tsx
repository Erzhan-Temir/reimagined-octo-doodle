import React from 'react';
import {citiesNameList} from '../../constants/constants';
import TabsItem from '../tabs-item/tabs-item';
import classNames from 'classnames';
import {ActionType} from '../../reducers/offers-data/offers-data';

type Props = {
  currentCity: string,
  changeCity: (city: string) => ActionType,
};

const Tabs = (props: Props): JSX.Element => {
  const {currentCity, changeCity} = props;
  const activeLinkClass = `tabs__item--active`;


  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">

          {
            citiesNameList.map((city) => {
              return (
                <TabsItem
                  key={city}
                  cityName={city}
                  classList={classNames(`locations__item-link tabs__item`, {
                    [activeLinkClass]: currentCity === city,
                  })}
                  changeCity={changeCity}
                />
              );
            })
          }

        </ul>
      </section>
    </div>
  );
};

export default Tabs;
