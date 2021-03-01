/* eslint-disable @typescript-eslint/no-explicit-any */
import React, {FunctionComponent, ComponentType} from 'react';
import {ConnectedProps, connect} from 'react-redux';
import {RootState} from '../reducers/root-reducer';

interface InjectedProps {
  isLoggedIn: boolean;
}

const mapStateToProps = ({user}: RootState) => {
  return {
    isLoggedIn: user.isLoggedIn,
  };
};

export const connector = connect(mapStateToProps);

type ReduxProps = ConnectedProps<typeof connector>;

export const withLoginInfo = <BaseProps extends InjectedProps>(BaseComponent: ComponentType<BaseProps>): FunctionComponent => {

  const WithLoginInfo: FunctionComponent<BaseProps & ReduxProps> = (props) => {
    return (
      <BaseComponent {...(props as BaseProps)} />
    );
  };

  return connector(WithLoginInfo as any);
};
