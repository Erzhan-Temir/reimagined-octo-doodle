import * as React from 'react';
import {ConnectedProps, connect} from 'react-redux';
import {bindActionCreators, Dispatch} from 'redux';
import {Operations, ActionsCreator} from '../reducers/offers-data/offers-data';
import {Offer} from '../types/offers-data';
import filterSelector from '../selectors/selectors';
import {ActionType} from '../reducers/offers-data/offers-data';
import {RootState} from '../reducers/root-reducer';

const mapStateToProps = ({offersData}: RootState) => {
  return {
    isLoading: offersData.isLoading,
    offers: filterSelector(offersData),
    currentCity: offersData.currentCity,
    sorting: offersData.sorting,
    activeOfferId: offersData.activeOfferId,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators({
    fetchOffers: Operations.fetchOffers(),
    changeSorting: ActionsCreator.changeSorting,
    setActiveOffer: ActionsCreator.setActiveOffer,
  }, dispatch);
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type InjectedProps = {
  isLoading: boolean;
  offers: Offer[];
  currentCity: string;
  sorting: string;
  activeOfferId: null|string;
  fetchOffers: () => Promise<[]>;
  changeSorting: (sorting: string) => ActionType;
  setActiveOffer: (id: null|string|undefined) => ActionType;
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
