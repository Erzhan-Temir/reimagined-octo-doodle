/* eslint-disable @typescript-eslint/no-explicit-any */
import React, {FunctionComponent, ComponentType} from 'react';
import {ConnectedProps, connect} from 'react-redux';
import {RootState} from '../reducers/root-reducer';


interface InjectedProps {
  currentCity: string;
}


const mapStateToProps = ({offersData}: RootState) => {
  return {
    currentCity: offersData.currentCity,
  };
};

export const connector = connect(mapStateToProps);

type ReduxProps = ConnectedProps<typeof connector>;

export const withCurrentCity = <BaseProps extends InjectedProps>(BaseComponent: ComponentType<BaseProps>): FunctionComponent => {

  const WithCurrentCity: FunctionComponent<BaseProps & ReduxProps> = (props) => {
    return (
      <BaseComponent {...(props as BaseProps)} />
    );
  };

  return connector(WithCurrentCity as any);
};
