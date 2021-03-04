import React, {useEffect} from 'react';
import Header from '../header/header';
import PageDetailsBoard from '../page-details-board/page-details-board';
import {RouteComponentProps} from 'react-router';
import {compose} from 'redux';
import {withLoadOffer} from '../../hocs/with-load-offer';
import {Offer} from '../../types/offers-data';
import {ActionType} from '../../reducers/offers-data/offers-data';
import LoadingStub from '../loading-stub/loading-stub';

type RouteParams = {
  id: string,
};

interface InjectedProps {
  isLoading: boolean,
  offer: Offer;
  fetchOffer: (id: string) => ActionType;
  removeOfferFromState: () => ActionType;
}

const PageDetails = (props: RouteComponentProps<RouteParams> & InjectedProps) => {

  const {id} = props.match.params;

  const {
    isLoading,
    fetchOffer,
    removeOfferFromState} = props;

  useEffect(() => {
    fetchOffer(id);
    return () => {
      removeOfferFromState();
    };
  }, [id]);

  return (
    <div className="page">
      <Header />
      {isLoading ? <LoadingStub /> : <PageDetailsBoard />}
    </div>
  );
};

export default compose<React.FunctionComponent<InjectedProps>>(withLoadOffer)(PageDetails);
