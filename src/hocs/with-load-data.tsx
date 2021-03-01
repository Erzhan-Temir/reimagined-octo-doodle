/* eslint-disable @typescript-eslint/no-explicit-any */
import React, {FunctionComponent, ComponentType} from 'react';
import {ConnectedProps, connect} from 'react-redux';
import {RootState} from '../reducers/root-reducer';
import {Operations} from '../reducers/offers-data/offers-data';
import {bindActionCreators, Dispatch} from 'redux';


interface InjectedProps {
  isLoading: boolean;
  fetchOffers: () => Promise<[]>;
}


const mapStateToProps = ({offersData}: RootState) => {
  return {
    isLoading: offersData.isLoading,
  };
};


const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators({
    fetchOffers: Operations.fetchOffers(),
  }, dispatch);
};

export const connector = connect(mapStateToProps, mapDispatchToProps);

type ReduxProps = ConnectedProps<typeof connector>;

export const withLoadData = <BaseProps extends InjectedProps>(BaseComponent: ComponentType<BaseProps>): FunctionComponent => {

  const WithLoadData: FunctionComponent<BaseProps & ReduxProps> = (props) => {
    return (
      <BaseComponent {...(props as BaseProps)} />
    );
  };

  return connector(WithLoadData as any);
};
