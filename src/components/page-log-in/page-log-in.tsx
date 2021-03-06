import React from 'react';
import {getLoginInfo} from '../../reducers/user/user-selectors';
import Header from '../header/header';
import LogInBoard from '../log-in-board/log-in-board';
import {Redirect} from 'react-router';
import {useSelector} from 'react-redux';


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
