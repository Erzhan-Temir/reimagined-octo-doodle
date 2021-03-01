import React from 'react';
import {compose} from 'redux';
import {Link} from 'react-router-dom';
import {withUserInfo} from '../../hocs/with-user-info';
import {UserInfo} from '../../types/user-reducer';
import {withLoginInfo} from '../../hocs/with-login-info';

interface Props {
  isLoggedIn: boolean;
  userInfo: UserInfo;
}


const Header = (props: Props): JSX.Element => {
  const {isLoggedIn, userInfo: {email}} = props;

  const getUserName = (): JSX.Element => {
    return <span className="header__user-name user__name">{email}</span>;
  };

  const signInStub = (): JSX.Element => {
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
                    isLoggedIn ? getUserName() : signInStub()
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

export default compose<React.FunctionComponent>(withLoginInfo, withUserInfo)(Header);
