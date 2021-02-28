import React from 'react';
import {withReduxConnectHeader} from '../../containers/with-connect-header';
import Header from '../header/header';
import PageMainBoard from '../page-main-board/page-main-board';

const HeaderWrapped = withReduxConnectHeader(Header);

const PageMain = (): JSX.Element => {
  return (
    <div className="page page--gray page--main">
      <HeaderWrapped />
      <PageMainBoard />
    </div>
  );
};

export default PageMain;
