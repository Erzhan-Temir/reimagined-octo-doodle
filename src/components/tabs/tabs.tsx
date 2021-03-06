import React from 'react';
import {citiesNameList} from '../../constants/constants';
import classNames from 'classnames';
import {getCurrentCity} from '../../reducers/offers-data/offers-data-selectors';
import {useSelector} from 'react-redux';
import TabsItem from '../tabs-item/tabs-item';


const Tabs = (): JSX.Element => {
  const currentCity = useSelector(getCurrentCity);

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
