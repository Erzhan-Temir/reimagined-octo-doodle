import React from 'react';
import {ActionsCreator} from '../../reducers/offers-data/offers-data';
import {sortingData} from '../../constants/constants';
import {useDispatch, useSelector} from 'react-redux';
import {getSortingValue} from '../../reducers/offers-data/offers-data-selectors';

const Sorting = (): JSX.Element => {
  const dispatch = useDispatch();

  const sorting = useSelector(getSortingValue);
  const sortingEntries = Object.entries(sortingData);

  const handleSortingChange = (evt: React.SyntheticEvent) => {
    const target = evt.target as HTMLSelectElement;
    dispatch(ActionsCreator.changeSorting(target.value));
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>

      <select
        onChange={handleSortingChange}
        className="places__sorting-type"
        id="places-sorting"
        value={sorting}
      >

        {
          sortingEntries.map((sortingItem) => {
            const key = sortingItem[0];
            const val = sortingItem[1];

            return (
              <option
                key={key}
                className="places__option"
                value={val}
              >{key}</option>
            );
          })
        }

      </select>

    </form>
  );
};

export default Sorting;
