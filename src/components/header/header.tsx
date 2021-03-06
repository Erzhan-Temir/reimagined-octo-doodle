import React from 'react';
import {getLoginInfo, getUserInfo} from '../../reducers/user/user-selectors';
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';


const Header = (): JSX.Element => {
  const isLoggedIn = useSelector(getLoginInfo);
  const userInfo = useSelector(getUserInfo);
  const {email} = userInfo;


  const getUserName = (): JSX.Element => {
    return <span className="header__user-name user__name">{email}</span>;
  };

  const getSignInStub = (): JSX.Element => {
    return <span className="header__login">Sign in</span>;
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link to="/" className="header__logo-link header__logo-link--active">
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width={81} height={41} />
            </Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <Link to="/login" className="header__nav-link header__nav-link--profile" href="#">
                  <div className="header__avatar-wrapper user__avatar-wrapper">
                  </div>
                  {
                    isLoggedIn ? getUserName() : getSignInStub()
                  }
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
