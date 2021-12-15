import React from 'react';
import styles from './Button.module.css';

interface IPropsButton {
  children?: string;
}

const Button = ({ children }: IPropsButton) => {
  return <button className={styles['button-style']}>{children}</button>;
};

export default Button;
