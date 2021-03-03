/* eslint-disable @typescript-eslint/no-explicit-any */
import React, {FunctionComponent, ComponentType} from 'react';
import {ConnectedProps, connect} from 'react-redux';
import {RootState} from '../reducers/root-reducer';
import filterSelector from '../selectors/offer-selector';
import {Offer} from '../types/offers-data';


interface InjectedProps {
  offers: Offer[];
}


const mapStateToProps = ({offersData}: RootState) => {
  return {
    offers: filterSelector(offersData),
  };
};

export const connector = connect(mapStateToProps);

type ReduxProps = ConnectedProps<typeof connector>;

export const withOffers = <BaseProps extends InjectedProps>(BaseComponent: ComponentType<BaseProps>): FunctionComponent => {

  const WithOffers: FunctionComponent<BaseProps & ReduxProps> = (props) => {
    return (
      <BaseComponent {...(props as BaseProps)} />
    );
  };

  return connector(WithOffers as any);
};
