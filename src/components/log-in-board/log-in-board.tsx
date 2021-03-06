import React from 'react';
import {getPendingAuthorization} from '../../reducers/user/user-selectors';
import {Operations} from '../../reducers/user/user';
import {Link} from 'react-router-dom';
import {useForm} from 'react-hook-form';
import {useDispatch, useSelector} from 'react-redux';
import "./log-in-board.css";

type FormData = {
  email: string;
};

const LogInBoard = (): JSX.Element => {
  const dispatch = useDispatch();
  const pendingAuthorization = useSelector(getPendingAuthorization);
  const {register, handleSubmit} = useForm<FormData>();


  const onSubmit = handleSubmit(({email}) => {
    dispatch(Operations.login(email));
  });


  return (
    <main className="page__main page__main--login">
      <div className="page__login-container container">
        <section className="login">
          <h1 className="login__title">Sign in</h1>
          <form
            onSubmit={onSubmit}
            className="login__form form"
            action="#"
            method="post"
          >
            <fieldset disabled={!pendingAuthorization}>

              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input
                  ref={register}
                  className="login__input form__input"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                />
              </div>

              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input
                  className="login__input form__input"
                  type="password"
                  name="password"
                  placeholder="Password"
                  required />
              </div>

              <button className="login__submit form__submit button" type="submit">Sign in</button>
            </fieldset>
          </form>
        </section>
        <section className="locations locations--login locations--current">
          <div className="locations__item">
            <Link to="/" className="locations__item-link" href="#">
              <span>Amsterdam</span>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
};

export default LogInBoard;
