/* eslint-disable @typescript-eslint/no-explicit-any */
import React, {FunctionComponent, ComponentType} from 'react';
import {ConnectedProps, connect} from 'react-redux';
import {ActionsCreator, ActionType} from '../reducers/user/user';
import {bindActionCreators, Dispatch} from 'redux';
import {RootState} from '../reducers/root-reducer';


interface InjectedProps {
  isLoginNoticeShowed: boolean;
  showLoginNotice: () => ActionType;
  hideLoginNotice: () => ActionType;
}

const mapStateToProps = ({user}: RootState) => {
  return {
    isLoginNoticeShowed: user.isLoginNoticeShowed,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators({
    showLoginNotice: ActionsCreator.showLoginNotice,
    hideLoginNotice: ActionsCreator.hideLoginNotice,
  }, dispatch);
};

export const connector = connect(mapStateToProps, mapDispatchToProps);


type ReduxProps = ConnectedProps<typeof connector>;


export const withLoginNotice = <BaseProps extends InjectedProps>(BaseComponent: ComponentType<BaseProps>): FunctionComponent => {
  const WithLoginNotice: FunctionComponent<BaseProps & ReduxProps> = (props) => {
    return (
      <BaseComponent {...(props as BaseProps)} />
    );
  };
  return connector(WithLoginNotice as any);
};
