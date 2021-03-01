/* eslint-disable @typescript-eslint/no-explicit-any */
import React, {FunctionComponent, ComponentType} from 'react';
import {ConnectedProps, connect} from 'react-redux';
import {RootState} from '../reducers/root-reducer';
import {ActionsCreator, ActionType} from '../reducers/offers-data/offers-data';
import {bindActionCreators, Dispatch} from 'redux';


interface InjectedProps {
  sorting: string;
  changeSorting: (sorting: string) => ActionType;
}


const mapStateToProps = ({offersData}: RootState) => {
  return {
    sorting: offersData.sorting,
  };
};


const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators({
    changeSorting: ActionsCreator.changeSorting,
  }, dispatch);
};

export const connector = connect(mapStateToProps, mapDispatchToProps);

type ReduxProps = ConnectedProps<typeof connector>;

export const withSorting = <BaseProps extends InjectedProps>(BaseComponent: ComponentType<BaseProps>): FunctionComponent => {

  const WithSorting: FunctionComponent<BaseProps & ReduxProps> = (props) => {
    return (
      <BaseComponent {...(props as BaseProps)} />
    );
  };

  return connector(WithSorting as any);
};
