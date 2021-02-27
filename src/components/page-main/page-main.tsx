import React from 'react';
import Header from '../header/header';
import PageMainBoard from '../page-main-board/page-main-board';

const PageMain = (): JSX.Element => {
  return (
    <div className="page page--gray page--main">
      <Header />
      <PageMainBoard />
    </div>
  );
};

export default PageMain;
