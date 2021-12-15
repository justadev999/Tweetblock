import type { NextPage } from 'next';
import Head from 'next/head';
import Router from 'next/router';
import AlignCenter from '../components/Layouts/AlignCenter';
import Card from '../components/UI/Card';
import LoginForm from '../components/LoginRightSide/LoginRightSide';
import LoginLeftSide from '../components/LoginLeftSide/LoginLeftSide';

const Home: NextPage = () => {
  return (
    <>
      <AlignCenter>
        <Card>
          <LoginLeftSide />
          <LoginForm />
        </Card>
      </AlignCenter>
    </>
  );
};

export default Home;
