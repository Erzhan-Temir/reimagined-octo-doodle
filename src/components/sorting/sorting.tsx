import React from 'react';
import {ActionType} from '../../reducers/offers-data/offers-data';
import {withSorting} from '../../hocs/with-sorting';
import {sortingData} from '../../constants/constants';

interface Props {
  sorting: string,
  changeSorting: (sorting: string) => ActionType,
}

const Sorting = (props: Props): JSX.Element => {

  const {sorting, changeSorting} = props;
  const sortingEntries = Object.entries(sortingData);

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>

      <select
        onChange={(evt) => changeSorting(evt.target.value)}
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

export default withSorting(Sorting);
