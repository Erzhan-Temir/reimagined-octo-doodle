import React from 'react';
import {compose} from 'redux';
import {Redirect} from 'react-router';
import Header from '../header/header';
import LogInBoard from '../log-in-board/log-in-board';
import {withAuthorization} from '../../hocs/with-authorization';
import {withLoginInfo} from '../../hocs/with-login-info';

interface Props {
  isLoggedIn: boolean;
  pendingAuthorization: boolean;
  login: (email: string) => Promise<string>;
}


const PageLogIn = (props: Props): JSX.Element => {

  const {isLoggedIn, pendingAuthorization, login} = props;

  if (isLoggedIn) {
    return <Redirect to="/favorites" />;
  }

  return (
    <div className="page page--gray page--login">

      <Header />

      <LogInBoard login={login} pendingAuthorization={pendingAuthorization} />
    </div>
  );
};


export default compose<React.FunctionComponent>(withLoginInfo, withAuthorization)(PageLogIn);
