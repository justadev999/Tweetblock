import React, { ButtonHTMLAttributes } from 'react';
import styles from './Button.module.css';

interface IPropsButton {
  children?: string;
  type?: ButtonHTMLAttributes<HTMLButtonElement>;
}

const Button = ({ children, type }: IPropsButton) => {
  return (
    <button type={'submit' || 'button'} className={styles['button-style']}>
      {children}
    </button>
  );
};

export default Button;
