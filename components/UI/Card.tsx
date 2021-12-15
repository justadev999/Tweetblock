import React from 'react';
import styles from './Card.module.css';

interface ICardProps {
  children?: React.ReactNode;
  className?: string;
}

const Card = ({ children, className }: ICardProps) => {
  return <div className={styles['card-style']}>{children}</div>;
};

export default Card;
