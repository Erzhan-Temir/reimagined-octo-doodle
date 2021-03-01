/* eslint-disable @typescript-eslint/no-explicit-any */
import React, {FunctionComponent, ComponentType} from 'react';
import {ConnectedProps, connect} from 'react-redux';
import {bindActionCreators, Dispatch} from 'redux';
import {Operations} from '../reducers/user/user';
import {RootState} from '../reducers/root-reducer';


interface InjectedProps {
  pendingAuthorization: boolean,
  login: (email: string) => Promise<string>;
}

const mapStateToProps = (state: RootState) => {
  return {
    pendingAuthorization: state.user.pendingAuthorization,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators({
    login: Operations.login(),
  }, dispatch);
};

export const connector = connect(mapStateToProps, mapDispatchToProps);


type ReduxProps = ConnectedProps<typeof connector>;


export const withAuthorization = <BaseProps extends InjectedProps>(BaseComponent: ComponentType<BaseProps>): FunctionComponent => {

  const WithAuthorization: FunctionComponent<BaseProps & ReduxProps> = (props) => {
    return (
      <BaseComponent {...(props as BaseProps)} />
    );
  };

  return connector(WithAuthorization as any);
};
