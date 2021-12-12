import React from 'react';
import Card from '../UI/Card';
import { styles } from '../../Utils/styles-config';
import loginFormImage from '../../images/loginFormImage.jpg';
import style from './Form.module.css';
import Button from '../UI/Button';

const LoginForm = () => {
  return (
    <Card
      width={styles.form.width}
      height={styles.form.height}
      boxShadow={styles.form.boxShadow}
      padding={styles.form.padding}
      borderRadius={styles.borderRadius.default}
      background={styles.colors.secondaryGrey}
      margin={styles.form.margin}
      display={styles.form.display}
      gridTemplateColumns={styles.form.gridTemplateColumns}
    >
      <div className={style.imageWrapper}>
        <div className={style['blurred-div']}>
          <h1>Tweetblock</h1>
          <p>
            Get tipped for your contents in this clone of Twitter built on the
            top of the blockchain with a JS stack ( React, Next, Typescript ).
          </p>
          <Button
            width={styles.button.width}
            height={styles.button.height}
            borderRadius={styles.borderRadius.default}
            color={styles.colors.primaryWhite}
            backgroundColor={styles.colors.primaryBlack}
          >
            Sign in
          </Button>
        </div>
      </div>
      <form>Form here</form>
    </Card>
  );
};

export default LoginForm;
