import React from 'react';

import styles from './styles.module.css';

const CompletedChallenges: React.FC = () => {
  return (
    <div className={styles.completedChallengesContainer}>
      <span>Desafios completos</span>
      <span>5</span>
    </div>
  );
}

export default CompletedChallenges;