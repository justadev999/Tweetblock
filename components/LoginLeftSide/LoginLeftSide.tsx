import React from 'react';
import Button from '../UI/Button';
import styles from './LoginLeftSide.module.css';

const LoginLeftSide = () => {
  return (
    <div className={styles['main-wrapper']}>
      <div className={styles['blurred-wrapper']}>
        <h1>Tweetblock</h1>
        <h2>
          Get tipped for your contents in this clone of Twitter built on the top
          of the blockchain with a JS stack ( React, Next, Typescript ).
        </h2>
        <Button>Sign in</Button>
      </div>
    </div>
  );
};

export default LoginLeftSide;
