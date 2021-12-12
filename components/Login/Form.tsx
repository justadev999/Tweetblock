import React from 'react';
import Card from '../UI/Card';
import { styles } from '../../Utils/styles-config';

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
    ></Card>
  );
};

export default LoginForm;
