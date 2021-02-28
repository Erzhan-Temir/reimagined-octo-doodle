import React from 'react';
import {sorting} from '../../constants/constants';
import {ActionType} from '../../reducers/offers-data/offers-data';

type Props = {
  currentSorting: string,
  changeSorting: (sorting: string) => ActionType,
};

const Sorting = (props: Props): JSX.Element => {
  const {currentSorting, changeSorting} = props;
  const sortingEntries = Object.entries(sorting);

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>

      <select
        onChange={(evt) => changeSorting(evt.target.value)}
        className="places__sorting-type"
        id="places-sorting"
        value={currentSorting}
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
