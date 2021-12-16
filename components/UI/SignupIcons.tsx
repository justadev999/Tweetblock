import React from 'react';
import styles from './SignupIcons.module.css';

const SignupIcons = () => {
  return (
    <div className={styles.wrapper}>
      <p>Sign up with</p>
      <button className={styles['google-icon']}></button>
      <button className={styles['apple-icon']}></button>
      <button className={styles['metamask-icon']}></button>
    </div>
  );
};

export default SignupIcons;
