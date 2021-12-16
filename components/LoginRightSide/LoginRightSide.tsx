import React, { useState, useEffect, useRef } from 'react';
import useInput from '../hooks/useInput';
import Button from '../UI/Button';
import Card from '../UI/Card';
import style from './Form.module.css';
import styles from './LoginRightSide.module.css';
import { checkPwValidity } from './utils/passwordIsValid';
import { IInputState, IValidState } from './interfaces';

const LoginForm = () => {
  const [input, setInput] = useState<IInputState>({
    email: '',
    password: '',
  });
  const [validInput, setValidInput] = useState<IValidState>({
    emailIsValid: false,
    passwordIsValid: false,
  });

  //REFS
  const emailInput = useRef(null);
  const passwordInput = useRef(null);

  //useInputHook

  const handleEmailChange = (e: any) => {
    setInput((prev) => {
      return { ...prev, email: e.target.value };
    });
  };

  const handlePasswordlChange = (e: any) => {
    setInput((prev) => {
      return { ...prev, password: e.target.value };
    });
  };

  useEffect(() => {
    if (input.email.trim().length >= 6) {
      setValidInput((prev) => {
        return { ...prev, emailIsValid: true };
      });
      console.log(validInput.emailIsValid);
    } else {
      setValidInput((prev) => {
        return { ...prev, emailIsValid: false };
      });
    }
  }, [input, validInput.emailIsValid, setValidInput]);

  useEffect(() => {
    let validPassword = checkPwValidity(input.password);
    console.log(validPassword);
  });

  const emailValidBorder = validInput.emailIsValid
    ? `${styles.valid}`
    : `${styles.invalid}`;

  return (
    <form className={styles['form']}>
      <h1>Welcome to Tweetblock</h1>
      <p>Create your account.</p>
      <label htmlFor="email">Email address</label>
      <input
        className={emailValidBorder}
        id="email"
        placeholder="Enter your email"
        onChange={handleEmailChange}
        ref={emailInput}
      />
      <label className={styles.test} htmlFor="password">
        Set Password
      </label>
      <input
        id="password"
        placeholder="Enter your password"
        onChange={handlePasswordlChange}
        ref={passwordInput}
      />
      <Button>Sign up</Button>
    </form>
  );
};

export default LoginForm;
