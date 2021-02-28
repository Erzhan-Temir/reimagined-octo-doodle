import * as React from 'react';
import {ConnectedProps, connect} from 'react-redux';
import {RootState} from '../reducers/root-reducer';
import {UserInfo} from '../types/user-reducer';


const mapStateToProps = (state: RootState) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    userInfo: state.user.userInfo,
  };
};


export const connector = connect(mapStateToProps);


type InjectedProps = {
  isLoggedIn: boolean;
  userInfo: UserInfo;
};

type HocComponentProps = InjectedProps;

type ReduxProps = ConnectedProps<typeof connector>;


// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const withReduxConnectHeader = <BaseProps extends HocComponentProps>(BaseComponent: React.ComponentType<BaseProps>) => {
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
