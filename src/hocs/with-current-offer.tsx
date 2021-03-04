/* eslint-disable @typescript-eslint/no-explicit-any */
import React, {FunctionComponent, ComponentType} from 'react';
import {ConnectedProps, connect} from 'react-redux';
import {RootState} from '../reducers/root-reducer';
import {Offer} from '../types/offers-data';


interface InjectedProps {
  offer: Offer;
}

const mapStateToProps = ({offersData}: RootState) => {
  return {
    offer: offersData.offer,
  };
};

export const connector = connect(mapStateToProps);

type ReduxProps = ConnectedProps<typeof connector>;

export const withCurrentOffer = <BaseProps extends InjectedProps>(BaseComponent: ComponentType<BaseProps>): FunctionComponent => {

  const WithCurrentOffer: FunctionComponent<BaseProps & ReduxProps> = (props) => {
    return (
      <BaseComponent {...(props as BaseProps)} />
    );
  };

  return connector(WithCurrentOffer as any);
};
