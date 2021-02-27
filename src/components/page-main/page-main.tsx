/* eslint-disable no-undef */
import React from 'react';
import Tabs from '../tabs/tabs';
import MainBoard from '../main-board/main-board';
import {withReduxConnect} from '../../containers/with-connect-main-board';


const MainBoardWrapped = withReduxConnect(MainBoard);


const PageMain = (): JSX.Element => {
  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <Tabs />
      <MainBoardWrapped />
    </main>
  );
};

export default PageMain;
