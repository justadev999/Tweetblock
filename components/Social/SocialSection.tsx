import React from 'react';
import styles from './SocialSection.module.css';
import AlignCenter from '../Layouts/AlignCenter';

const SocialSection = () => {
  return (
    <AlignCenter>
      <div className={styles['grid-wrapper']}>
        <div className={styles['left-wrapper']}>
          <div className={styles['profile-div']}>PROFILE</div>
          <div className={styles['activities-div']}>ACTIVITIES</div>
        </div>

        <div className={styles['center-wrapper']}>
          <div className={styles['post-div']}>POST</div>
          <ul className={styles['posts-ul']}>
            <li>Li</li>
          </ul>
        </div>

        <div className={styles['right-wrapper']}>
          <div className={styles['boh-div']}>BOH</div>
        </div>
      </div>
    </AlignCenter>
  );
};

export default SocialSection;
