import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Router from 'next/router';

const Home: NextPage = () => {
  const handleClick = (e: any, page: any) => {
    e.preventDefault();
    console.log('i clicked a page');
  };
  console.log();
  return (
    <div>
      <button onClick={(e) => handleClick(e, 'blog')}>Home</button>
    </div>
  );
};

export default Home;
