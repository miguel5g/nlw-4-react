import React from 'react';

import styles from './styles.module.css';

const Profile: React.FC = () => {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/miguel5g.png" alt="Miguel Ângelo" />
      <div>
        <strong>Miguel Ângelo</strong>
        <p>
          <img src="icons/level.svg" alt="Level"/>
          Level 1
        </p>
      </div>
    </div>
  );
}

export default Profile;