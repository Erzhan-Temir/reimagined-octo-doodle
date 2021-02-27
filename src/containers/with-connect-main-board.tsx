import * as React from 'react';
import {Diff} from 'utility-types';
import {ConnectedProps, connect} from 'react-redux';
import {State} from '../types/offers';
import {bindActionCreators, Dispatch} from 'redux';
import {Operations} from '../reducers/reducer';

const mapStateToProps = (state: State) => {
  return {
    isLoading: state.isLoading,
    offers: state.offers,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators({
    fetchOffers: Operations.fetchOffers(),
  }, dispatch);
};

export const connector = connect(mapStateToProps, mapDispatchToProps);

type InjectedProps = {
  isLoading: boolean;
  offers: object[];
  fetchOffers: () => Promise<[]>;
};

type HocComponentProps = InjectedProps;

type ReduxProps = ConnectedProps<typeof connector>;

export const withReduxConnect = <BaseProps extends HocComponentProps>(BaseComponent: React.ComponentType<BaseProps>) => {
  type HocProps = BaseProps & ReduxProps;

  class WithReduxConnect extends React.Component<HocProps> {
    static displayName = `withCounterListener(${BaseComponent.name})`;
    static readonly WrappedComponent = BaseComponent;

    render() {
      const {...restProps} = this.props;
      return (
        <BaseComponent {...restProps} />
      );
    }
  }

  const ConnectedHoc = connector(WithReduxConnect as any);
  return ConnectedHoc;
};
