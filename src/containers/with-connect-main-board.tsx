import * as React from 'react';
import {ConnectedProps, connect} from 'react-redux';
import {State} from '../types/offers';
import {bindActionCreators, Dispatch} from 'redux';
import {Operations, ActionsCreator} from '../reducers/reducer';
import {Offer} from '../types/offers';
import filterSelector from '../selectors/selectors';
import {ChangeSorting} from '../types/actions';

const mapStateToProps = (state: State) => {
  return {
    isLoading: state.isLoading,
    offers: filterSelector(state),
    currentCity: state.currentCity,
    sorting: state.sorting,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators({
    fetchOffers: Operations.fetchOffers(),
    changeSorting: ActionsCreator.changeSorting,
  }, dispatch);
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type InjectedProps = {
  isLoading: boolean;
  offers: Offer[];
  currentCity: string;
  sorting: string;
  fetchOffers: () => Promise<[]>;
  changeSorting: () => ChangeSorting;
};

type HocComponentProps = InjectedProps;

type ReduxProps = ConnectedProps<typeof connector>;


// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const withReduxConnectMainBoard = <BaseProps extends HocComponentProps>(BaseComponent: React.ComponentType<BaseProps>) => {
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
