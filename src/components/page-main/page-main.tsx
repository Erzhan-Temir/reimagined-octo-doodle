import React from 'react';
import Header from '../header/header';
import LoginNotice from '../log-in-notice/log-in-notice';
import MainBoard from '../main-board/main-board';


const PageMain = (): JSX.Element => {
  return (
    <div className="page page--gray page--main">
      <Header />
      <MainBoard />
      <LoginNotice />
    </div>
  );
};

export default PageMain;
