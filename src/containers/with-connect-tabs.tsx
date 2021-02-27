import * as React from 'react';
import {ConnectedProps, connect} from 'react-redux';
import {State} from '../types/offers';
import {bindActionCreators, Dispatch} from 'redux';
import {ActionsCreator} from '../reducers/reducer';
import {ChangeCity} from '../types/actions';

const mapStateToProps = (state: State) => {
  return {
    currentCity: state.currentCity,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators({
    changeCity: ActionsCreator.changeCity,
  }, dispatch);
};

export const connector = connect(mapStateToProps, mapDispatchToProps);

type InjectedProps = {
  currentCity: string;
  changeCity: () => ChangeCity;
};

type HocComponentProps = InjectedProps;

type ReduxProps = ConnectedProps<typeof connector>;


// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const withReduxConnectTabs = <BaseProps extends HocComponentProps>(BaseComponent: React.ComponentType<BaseProps>) => {
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
