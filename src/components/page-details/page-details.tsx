import React from 'react';
import Header from '../header/header';
import PageDetailsBoard from '../page-details-board/page-details-board';
import {RouteComponentProps} from 'react-router';

type RouteParams = {
  id: string
};

const PageDetails = (props: RouteComponentProps<RouteParams>): JSX.Element => {
  return (
    <div className="page">
      <Header />
      <PageDetailsBoard />
    </div>
  );
};

export default PageDetails;
