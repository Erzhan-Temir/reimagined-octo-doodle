import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import {LOGIN_NOTICE_INTERVAL} from '../../constants/constants';
import {withLoginNotice} from '../../hocs/with-login-notice';
import {ActionType} from '../../reducers/user/user';
import './log-in-notice.css';

interface Props {
  isLoginNoticeShowed: boolean;
  hideLoginNotice: () => ActionType;
}

const LoginNotice = (props: Props) => {
  const {isLoginNoticeShowed, hideLoginNotice} = props;

  if (!isLoginNoticeShowed) {
    return null;
  }

  useEffect(() => {
    const hideTimeout = setTimeout(() => {
      hideLoginNotice();
    }, LOGIN_NOTICE_INTERVAL);
    return () => {
      hideLoginNotice();
      clearTimeout(hideTimeout);
    };
  }, []);

  return (
    <section className="login-notice">
      <h2 className="visually-hidden">Log In notification</h2>
      <div className="login-notice-wrapper container">
        <p>Please sign in to add offer to favorites and leave comments.</p>
        <div className="login-notice-buttons">
          <Link to="/login">
            <button type="button" className="button button-small">
              Sign In
            </button>
          </Link>
          <button
            onClick={() => hideLoginNotice()}
            type="button"
            className="button button-close">
            <span className="visually-hidden">Close</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default withLoginNotice(LoginNotice);
