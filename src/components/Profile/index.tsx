import React, { useContext } from 'react';

import { challengesContext } from '../../contexts/ChallengesContext';

import styles from './styles.module.css';

const Profile: React.FC = () => {
  const { level } = useContext(challengesContext);

  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/miguel5g.png" alt="Miguel Ângelo" />
      <div>
        <strong>Miguel Ângelo</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </div>
    </div>
  );
}

export default Profile;