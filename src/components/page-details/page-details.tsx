import React from 'react';
import Header from '../header/header';
import PageDetailsBoard from '../page-details-board/page-details-board';
import {RouteComponentProps} from 'react-router';
import {withReduxConnectHeader} from '../../containers/with-connect-header';

type RouteParams = {
  id: string
};

const HeaderWrapped = withReduxConnectHeader(Header);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const PageDetails = (props: RouteComponentProps<RouteParams>): JSX.Element => {
  return (
    <div className="page">
      <HeaderWrapped />
      <PageDetailsBoard />
    </div>
  );
};

export default PageDetails;
