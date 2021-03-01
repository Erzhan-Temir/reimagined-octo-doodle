import React from 'react';
import Header from '../header/header';
import PageDetailsBoard from '../page-details-board/page-details-board';
import {RouteComponentProps} from 'react-router';

type RouteParams = {
  id: string
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const PageDetails = (props: RouteComponentProps<RouteParams>): JSX.Element => {
  return (
    <div className="page">
      <Header />
      <PageDetailsBoard />
    </div>
  );
};

export default PageDetails;
