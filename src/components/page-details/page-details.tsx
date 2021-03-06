import React, {useEffect} from 'react';
import {ActionsCreator, Operations} from '../../reducers/offers-data/offers-data';
import Header from '../header/header';
import LoadingStub from '../loading-stub/loading-stub';
import LoginNotice from '../log-in-notice/log-in-notice';
import {isOffersLoading} from '../../reducers/offers-data/offers-data-selectors';
import PageDetailsBoard from '../page-details-board/page-details-board';
import {RouteComponentProps} from 'react-router';
import {useDispatch, useSelector} from 'react-redux';


interface RouteParams {
  id: string,
}


const PageDetails = (props: RouteComponentProps<RouteParams>): JSX.Element => {
  const {id} = props.match.params;

  const isLoading = useSelector(isOffersLoading);
  const dispatch = useDispatch();

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
