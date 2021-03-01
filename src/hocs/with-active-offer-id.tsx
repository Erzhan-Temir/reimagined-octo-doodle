/* eslint-disable @typescript-eslint/no-explicit-any */
import React, {FunctionComponent, ComponentType} from 'react';
import {ConnectedProps, connect} from 'react-redux';
import {RootState} from '../reducers/root-reducer';


interface InjectedProps {
  activeOfferId: null|string;
}


const mapStateToProps = ({offersData}: RootState) => {
  return {
    activeOfferId: offersData.activeOfferId,
  };
};

export const connector = connect(mapStateToProps);

type ReduxProps = ConnectedProps<typeof connector>;

export const withActiveOfferId = <BaseProps extends InjectedProps>(BaseComponent: ComponentType<BaseProps>): FunctionComponent => {

  const WithActiveOfferId: FunctionComponent<BaseProps & ReduxProps> = (props) => {
    return (
      <BaseComponent {...(props as BaseProps)} />
    );
  };

  return connector(WithActiveOfferId as any);
};
