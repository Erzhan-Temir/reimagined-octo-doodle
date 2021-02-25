import React from 'react';
import Tabs from '../tabs/tabs';
import MainBoard from '../main-board/main-board';

const PageMain = () => {
  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <Tabs />
      <MainBoard />
    </main>
  );
};

export default PageMain;
