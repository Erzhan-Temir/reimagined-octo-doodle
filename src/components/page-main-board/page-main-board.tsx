import React from 'react';
import Tabs from '../tabs/tabs';
import MainBoard from '../main-board/main-board';
import {withReduxConnectMainBoard} from '../../containers/with-connect-main-board';
import {withReduxConnectTabs} from '../../containers/with-connect-tabs';

const PageMainBoardWrapped = withReduxConnectMainBoard(MainBoard);
const TabsWrapped = withReduxConnectTabs(Tabs);

const PageMainBoard = (): JSX.Element => {
  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <TabsWrapped />
      <PageMainBoardWrapped />
    </main>
  );
};

export default PageMainBoard;
