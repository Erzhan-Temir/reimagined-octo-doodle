import * as React from 'react';
import {ConnectedProps, connect} from 'react-redux';
import {bindActionCreators, Dispatch} from 'redux';
import {Operations} from '../reducers/user/user';
import {RootState} from '../reducers/root-reducer';

const mapStateToProps = (state: RootState) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    pendingAuthorization: state.user.pendingAuthorization,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators({
    login: Operations.login(),
  }, dispatch);
};

export const connector = connect(mapStateToProps, mapDispatchToProps);

type InjectedProps = {
  isLoggedIn: boolean;
  pendingAuthorization: boolean,
  login: (email: string) => Promise<string>;
};

type HocComponentProps = InjectedProps;

type ReduxProps = ConnectedProps<typeof connector>;


// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const withReduxConnectLogIn = <BaseProps extends HocComponentProps>(BaseComponent: React.ComponentType<BaseProps>) => {
  type HocProps = BaseProps & ReduxProps;

  class WithReduxConnect extends React.Component<HocProps> {
    static displayName = `withCounterListener(${BaseComponent.name})`;
    static readonly WrappedComponent = BaseComponent;

    render() {
      const {...restProps} = this.props;

      return (
        <BaseComponent {...(restProps as BaseProps)} />
      );
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const ConnectedHoc = connector(WithReduxConnect as any);
  return ConnectedHoc;
};
