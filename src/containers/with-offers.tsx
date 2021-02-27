import * as React from 'react';
import {connect} from 'react-redux';
import {Diff, Omit} from 'utility-types';
import {State} from '../types/offers';
import {bindActionCreators, Dispatch} from 'redux';
import {Operations} from '../reducers/reducer';

interface InjectedProps {
  isLoading: boolean,
  offers: object[],
  fetchOffers: () => Promise<[]>,
}

const withOffers = <P extends InjectedProps>(Component: React.FunctionComponent<P>): React.FunctionComponent<P> => {

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

  const WithOffers = (props: InjectedProps) => {
    return <Component {...props as P} />;
  };

  return connect<
  ReturnType<typeof mapStateToProps>,
    typeof mapDispatchToProps,
    Diff<P, InjectedProps>,
    State
  >(mapStateToProps, mapDispatchToProps)(WithOffers);
};

export default withOffers;
