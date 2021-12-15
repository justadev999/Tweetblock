import React from 'react';
import style from './AlignCenter.module.css';

interface IAlignCenterProps {
  children?: React.ReactNode;
}

const AlignCenter = ({ children }: IAlignCenterProps) => {
  return <section className={style['centered-section']}>{children}</section>;
};

export default AlignCenter;
