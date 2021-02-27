import React from 'react';
import Tabs from '../tabs/tabs';
import MainBoard from '../main-board/main-board';
import {withReduxConnect} from '../../containers/with-connect-main-board';


const PageMainBoardWrapped = withReduxConnect(MainBoard);


const PageMainBoard = (): JSX.Element => {
  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <Tabs />
      <PageMainBoardWrapped />
    </main>
  );
};

export default PageMainBoard;
