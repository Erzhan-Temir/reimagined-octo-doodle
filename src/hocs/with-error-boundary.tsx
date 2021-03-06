import React from 'react';
import {ActionsCreator, ActionType} from '../reducers/offers-data/offers-data';
import {bindActionCreators, Dispatch} from 'redux';
import {ConnectedProps, connect} from 'react-redux';
import {RootState} from '../reducers/root-reducer';
import ErrorBoundary from '../components/error-boundary/error-boundary';


const mapStateToProps = ({offersData}: RootState) => {
  return {
    hasError: offersData.hasError,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators({
    catchError: ActionsCreator.fetchOffersError,
  }, dispatch);
};

const connector = connect(mapStateToProps, mapDispatchToProps);
type ReduxProps = ConnectedProps<typeof connector>;

interface InjectedProps {
  hasError: boolean;
  catchError: () => ActionType;
}

const withErrorBoundary = <P extends InjectedProps>(BaseComponent: React.ComponentType<P>): React.ComponentType<P> => {
  class WithErrorBoundary extends React.Component<P & ReduxProps> {

    public componentDidCatch() {
      this.props.catchError();
    }

    public render(): JSX.Element {
      if (this.props.hasError) {
        return (
          <ErrorBoundary />
        );
      }

      return <BaseComponent {...this.props} />;

    }
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return connector(WithErrorBoundary as any);
};


export default withErrorBoundary;
