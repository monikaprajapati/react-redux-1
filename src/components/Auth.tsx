import React from 'react';
import classes from './Auth.module.css';
import { useDispatch } from 'react-redux';
import { authActions } from 'src/store/authenticationSlice';

const Auth = () => {
  const dispatch = useDispatch();
  const submitHandler = (event: any) => {
    event.preventDefault();
    dispatch(authActions.login());
  }
  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={submitHandler}>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
