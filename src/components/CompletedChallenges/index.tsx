import React, { useContext } from 'react';

import { challengesContext } from '../../contexts/ChallengesContext';

import styles from './styles.module.css';

const CompletedChallenges: React.FC = () => {
  const { challengesCompleted } = useContext(challengesContext);

  return (
    <div className={styles.completedChallengesContainer}>
      <span>Desafios completos</span>
      <span>{challengesCompleted || 0}</span>
    </div>
  );
}

export default CompletedChallenges;