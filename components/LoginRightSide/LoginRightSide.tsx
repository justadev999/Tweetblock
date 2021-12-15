import React, { useState, useEffect } from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';
import style from './Form.module.css';
import styles from './LoginRightSide.module.css';

interface StateINterface {
  email: string;
  password: string;
}

const LoginForm = () => {
  const [input, setInput] = useState<StateINterface>({
    email: '',
    password: '',
  });

  useEffect(() => {});

  return (
    <form className={styles['form']}>
      <h1>Welcome to Tweetblock</h1>
      <p>Create your account.</p>
      <label htmlFor="email">Email address</label>
      <input id="email" placeholder="Enter your email" />
      <label className={styles.test} htmlFor="password">
        Set Password
      </label>
      <input id="password" placeholder="Enter your password" />
      <Button>Sign up</Button>
    </form>
  );
};

export default LoginForm;
