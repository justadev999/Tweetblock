import type { NextPage } from 'next';
import Head from 'next/head';
import Router from 'next/router';
import LoginForm from '@/components/LoginRightSide/LoginRightSide';
import LoginLeftSide from '@/components/LoginLeftSide/LoginLeftSide';
import AlignCenter from '@/components/Layouts/AlignCenter';
import Card from '@/components/UI/Card';

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
