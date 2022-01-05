import React, { useState, useEffect } from 'react';

// import Card from '../UI/Card/Card';
import classes from './Login.module.css';
// import Button from '../UI/Button/Button';

const Login = (props) => {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [emailIsValid, setEmailIsValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState('');
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  
  useEffect(() => {
    console.log('Check Use effect running');
   
  }, [enteredPassword])

  useEffect(() => {

    const identifier = setTimeout(() => {
      console.log('Check Validity !!')
      setFormIsValid(
        enteredEmail.includes('@') && enteredPassword.trim().length > 6
      );
    }, 500);
    return () => {
      console.log('Clean UP!!')
      clearTimeout(identifier)
    }
  }, [enteredEmail, enteredPassword])

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  const validateEmailHandler = () => {
    setEmailIsValid(enteredEmail.includes('@'));
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    sessionStorage.setItem('isLoggedIn', '1');
    props.user(true);
    props.loginfun(false);
    console.log('_activelogin', props.user);
   
  };

  return (

    <section>

<div className={classes.overlay} style={props.loginActive ? {display:'block'} : {display:'none'}} >
<div className={classes.modalContainer} style={props.loginActive ? {display:'block'} : {display:'none'}}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${emailIsValid === false ? classes.invalid : ''
            }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={enteredEmail}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${passwordIsValid === false ? classes.invalid : ''
            }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={enteredPassword}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <button type="submit" className="btn btn-primary" disabled={!formIsValid}>
            Login
          </button>
        </div>
      </form>
      </div>
      </div>

            </section>
            
  );
};

export default Login;
