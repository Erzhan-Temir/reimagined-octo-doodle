/* eslint-disable @typescript-eslint/no-explicit-any */
import React, {FunctionComponent, ComponentType} from 'react';
import {ConnectedProps, connect} from 'react-redux';
import {ActionsCreator, ActionType, Operations} from '../reducers/offers-data/offers-data';
import {bindActionCreators, Dispatch} from 'redux';
import {RootState} from '../reducers/root-reducer';
import {Offer} from '../types/offers-data';


interface InjectedProps {
  isLoading: boolean;
  offer: Offer;
  fetchOffer: (id: string) => ActionType;
  removeOfferFromState: () => ActionType;
}

const mapStateToProps = ({offersData}: RootState) => {
  return {
    isLoading: offersData.isLoading,
    offer: offersData.offer,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators({
    fetchOffer: Operations.fetchOffer(),
    removeOfferFromState: ActionsCreator.removeOfferFromState,
  }, dispatch);
};

export const connector = connect(mapStateToProps, mapDispatchToProps);

type ReduxProps = ConnectedProps<typeof connector>;

export const withLoadOffer = <BaseProps extends InjectedProps>(BaseComponent: ComponentType<BaseProps>): FunctionComponent => {

  const WithLoadOffer: FunctionComponent<BaseProps & ReduxProps> = (props) => {
    return (
      <BaseComponent {...(props as BaseProps)} />
    );
  };

  return connector(WithLoadOffer as any);
};
