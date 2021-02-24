import React, { useContext } from 'react';

import { challengesContext } from '../../contexts/ChallengesContext';

import styles from './styles.module.css';

const ExperienceBar: React.FC = () => {
  const { currentExperience, experienceToNextLevel } = useContext(challengesContext);

  const percentToNextLevel = Math.round(currentExperience * 100) / experienceToNextLevel;

  return (
    <header className={styles.experienceBar}>
      <span>0 xp</span>
      <div>
        <div style={{ width: `${percentToNextLevel}%` }} />

        <span className={styles.currentExperience} style={{ left: `${percentToNextLevel}%` }}>
          {currentExperience} xp
        </span>
      </div>
      <span>{experienceToNextLevel} xp</span>
    </header>
  );
}

export default ExperienceBar;