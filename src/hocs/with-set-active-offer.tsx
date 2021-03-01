/* eslint-disable @typescript-eslint/no-explicit-any */
import React, {FunctionComponent, ComponentType} from 'react';
import {ConnectedProps, connect} from 'react-redux';
import {ActionsCreator, ActionType} from '../reducers/offers-data/offers-data';
import {bindActionCreators, Dispatch} from 'redux';


interface InjectedProps {
  setActiveOffer: (id: null|string|undefined) => ActionType;
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators({
    setActiveOffer: ActionsCreator.setActiveOffer,
  }, dispatch);
};

export const connector = connect(null, mapDispatchToProps);

type ReduxProps = ConnectedProps<typeof connector>;

export const withSetActiveOffer = <BaseProps extends InjectedProps>(BaseComponent: ComponentType<BaseProps>): FunctionComponent => {

  const WithSetActiveOffer: FunctionComponent<BaseProps & ReduxProps> = (props) => {
    return (
      <BaseComponent {...(props as BaseProps)} />
    );
  };

  return connector(WithSetActiveOffer as any);
};
