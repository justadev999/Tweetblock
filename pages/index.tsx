import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Router from 'next/router';
import LoginForm from '../components/Login/Form';
import AlignCenter from '../components/Layouts/AlignCenter';

const LoginPage: NextPage = () => {
  return (
    <>
      <AlignCenter>
        <LoginForm />
      </AlignCenter>
    </>
  );
};

export default LoginPage;
