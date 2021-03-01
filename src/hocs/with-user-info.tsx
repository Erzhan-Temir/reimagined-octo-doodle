/* eslint-disable @typescript-eslint/no-explicit-any */
import React, {FunctionComponent, ComponentType} from 'react';
import {ConnectedProps, connect} from 'react-redux';
import {RootState} from '../reducers/root-reducer';
import {UserInfo} from '../types/user-reducer';

interface InjectedProps {
  userInfo: UserInfo;
}

const mapStateToProps = (state: RootState) => {
  return {
    userInfo: state.user.userInfo,
  };
};

export const connector = connect(mapStateToProps);


type ReduxProps = ConnectedProps<typeof connector>;


export const withUserInfo = <BaseProps extends InjectedProps>(BaseComponent: ComponentType<BaseProps>): FunctionComponent => {

  const WithUserInfo: FunctionComponent<BaseProps & ReduxProps> = (props) => {
    return (
      <BaseComponent {...(props as BaseProps)} />
    );
  };

  return connector(WithUserInfo as any);
};
