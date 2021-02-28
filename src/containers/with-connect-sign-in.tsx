import * as React from 'react';
import {ConnectedProps, connect} from 'react-redux';
import {State} from '../types/offers';
import {bindActionCreators, Dispatch} from 'redux';
import {Operations} from '../reducers/reducer';

const mapStateToProps = (state: State) => {
  return {
    isLoggedIn: state.isLoggedIn,
    isLoginFormDisabled: state.isLoginFormDisabled,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators({
    logIn: Operations.logIn(),
  }, dispatch);
};

export const connector = connect(mapStateToProps, mapDispatchToProps);

type InjectedProps = {
  isLoggedIn: boolean;
  logIn: (email: string) => Promise<string>;
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
