import React, { useState, useEffect, useRef, Ref } from 'react';
import useInput from '../hooks/useInput';
import Button from '../UI/Button';
import Card from '../UI/Card';
import style from './Form.module.css';
import styles from './LoginRightSide.module.css';
import { checkPwValidity } from './utils/passwordIsValid';
import { IInputState, IValidState } from './utils/interfaces';
import SignupIcons from '../UI/SignupIcons';
import { isGeneratorObject } from 'util/types';

const LoginForm = () => {
  const [input, setInput] = useState<IInputState>({
    email: '',
    password: '',
  });
  const [validInput, setValidInput] = useState<IValidState>({
    emailIsValid: false,
    passwordIsValid: false,
  });
  const [focusInput, setFocusInput] = useState(false);

  //REFS
  const emailInput = useRef<any>(null);
  const passwordInput = useRef<any>(null);

  /////////////////////////
  /////HANDLE ONCHANGES/////
  /////////////////////////
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

  ////////////////////
  /////USEEFFECTS/////
  ////////////////////

  useEffect(() => {
    emailInput.current.focus();
    setFocusInput(true);
  });

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
  }, [input.password]);

  ////////////////////
  ////HANDLE SUBMIT///
  ////////////////////

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const signedUser = {
      email: input.email,
      password: input.password,
    };
    if (validInput.emailIsValid && validInput.passwordIsValid) {
      console.log(signedUser);
    }
    if (!validInput.emailIsValid && !validInput.passwordIsValid) {
      console.log('there are mistakes');
    }
    setInput((prev) => {
      return { ...prev, email: '', password: '' };
    });
  };

  const emailValidBorder = validInput.emailIsValid
    ? `${styles.valid}`
    : `${styles.invalid}`;

  return (
    <>
      <div className={styles.wrapper}>
        <form className={styles['form']} onSubmit={handleSubmit}>
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
          />
          <Button>Sign up</Button>
        </form>
        <SignupIcons />
      </div>
    </>
  );
};

export default LoginForm;
