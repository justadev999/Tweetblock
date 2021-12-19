import React from 'react';
import styles from './SocialSection.module.css';
import AlignCenter from '../Layouts/AlignCenter';

const SocialSection = () => {
  return (
    <AlignCenter>
      <section className={styles['main-section']}>
        <div className={styles['left-column']}>
          <div className={styles['profile-div']}>
            <div className={styles['profile-div-header']}></div>
            <div className={styles['profile-pic']}></div>
            <div className={styles['nikname-div']}>
              <h1>Nickname</h1>
              <h2>@edit nickname</h2>
            </div>
            <div className={styles['caption-div']}>
              <p>Hi my name is simone and im a full stack dev </p>
            </div>
          </div>
        </div>
        <div>2</div>
        <div>3</div>
      </section>
    </AlignCenter>
  );
};

export default SocialSection;
