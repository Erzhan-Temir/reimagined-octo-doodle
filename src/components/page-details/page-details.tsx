import React, {useEffect} from 'react';
import Header from '../header/header';
import PageDetailsBoard from '../page-details-board/page-details-board';
import {RouteComponentProps} from 'react-router';
import {ActionsCreator, Operations} from '../../reducers/offers-data/offers-data';
import LoadingStub from '../loading-stub/loading-stub';
import LoginNotice from '../log-in-notice/log-in-notice';
import {useDispatch, useSelector} from 'react-redux';
import {isOffersLoading} from '../../reducers/offers-data/offers-data-selectors';

type RouteParams = {
  id: string,
};


const PageDetails = (props: RouteComponentProps<RouteParams>): JSX.Element => {
  const dispatch = useDispatch();

  const {id} = props.match.params;

  const isLoading = useSelector(isOffersLoading);

  useEffect(() => {
    dispatch(Operations.fetchOffer(id));
    return () => {
      dispatch(ActionsCreator.removeOfferFromState);
    };
  }, [id]);

  return (
    <div className="page">
      <Header />
      {isLoading ? <LoadingStub /> : <PageDetailsBoard />}
      <LoginNotice />
    </div>
  );
};

export default PageDetails;
