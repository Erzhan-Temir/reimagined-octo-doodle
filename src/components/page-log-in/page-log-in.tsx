import React from 'react';
import {Redirect} from 'react-router';
import Header from '../header/header';
import LogInBoard from '../log-in-board/log-in-board';
import {useSelector} from 'react-redux';
import {getLoginInfo} from '../../reducers/user/user-selectors';


const PageLogIn = (): JSX.Element => {

  const isLoggedIn = useSelector(getLoginInfo);

  if (isLoggedIn) {
    return <Redirect to="/favorites" />;
  }

  return (
    <div className="page page--gray page--login">
      <Header />
      <LogInBoard />
    </div>
  );
};


export default PageLogIn;
