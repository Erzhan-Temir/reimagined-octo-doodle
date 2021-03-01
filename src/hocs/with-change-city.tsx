/* eslint-disable @typescript-eslint/no-explicit-any */
import React, {FunctionComponent, ComponentType} from 'react';
import {ConnectedProps, connect} from 'react-redux';
import {ActionsCreator, ActionType} from '../reducers/offers-data/offers-data';
import {bindActionCreators, Dispatch} from 'redux';


interface InjectedProps {
  changeCity: () => ActionType;
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators({
    changeCity: ActionsCreator.changeCity,
  }, dispatch);
};

export const connector = connect(null, mapDispatchToProps);

type ReduxProps = ConnectedProps<typeof connector>;

export const withChangeCity = <BaseProps extends InjectedProps>(BaseComponent: ComponentType<BaseProps>): FunctionComponent => {

  const WithChangeCity: FunctionComponent<BaseProps & ReduxProps> = (props) => {
    return (
      <BaseComponent {...(props as BaseProps)} />
    );
  };

  return connector(WithChangeCity as any);
};
