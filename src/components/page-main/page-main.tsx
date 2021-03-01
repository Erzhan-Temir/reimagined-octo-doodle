import React from 'react';
import Header from '../header/header';
import MainBoard from '../main-board/main-board';


const PageMain = (): JSX.Element => {
  return (
    <div className="page page--gray page--main">
      <Header />
      <MainBoard />
    </div>
  );
};

export default PageMain;
