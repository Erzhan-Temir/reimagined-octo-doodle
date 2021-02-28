import React from 'react';
import {Redirect} from 'react-router';
import {withReduxConnectHeader} from '../../containers/with-connect-header';
import Header from '../header/header';
import LogInBoard from '../log-in-board/log-in-board';

type Props = {
  isLoggedIn: boolean;
  pendingAuthorization: boolean;
  login: (email: string) => Promise<string>;
};

const HeaderWrapped = withReduxConnectHeader(Header);

const PageLogIn = (props: Props): JSX.Element => {

  const {isLoggedIn, pendingAuthorization, login} = props;

  if (isLoggedIn) {
    return <Redirect to="/favorites" />;
  }

  return (
    <div className="page page--gray page--login">

      <HeaderWrapped />

      <LogInBoard login={login} pendingAuthorization={pendingAuthorization} />
    </div>
  );
};


export default PageLogIn;
