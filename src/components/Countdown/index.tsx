import React, { useContext, useEffect, useState } from 'react';
import { FiX } from 'react-icons/fi';

import { challengesContext } from '../../contexts/ChallengesContext';
import { CountdownContext } from '../../contexts/CountdownContext';

import styles from './styles.module.css';

const Countdown: React.FC = () => {
  const { minutes,
    seconds,
    hasFinished,
    isActive,
    resetCountdown,
    startCountdown,
  } = useContext(CountdownContext);

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  return (
    <div>
      <div className={styles.countdownContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>

        <span>:</span>

        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>

      { hasFinished
        ? (
          <button
            className={styles.countdownButton}
            disabled
          >
            Ciclo encerrado
            <img src="icons/check_circle.svg" />
          </button>
        ) : (
          <>
            { isActive
              ? (
                <button
                  type="button"
                  className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
                  onClick={resetCountdown}
                >
                  Abandonar ciclo
                  <FiX size="1.5rem" style={{ marginLeft: 12 }} />
                </button>
              )
              : (
                <button
                  type="button"
                  className={styles.countdownButton}
                  onClick={startCountdown}
                >
                  Iníciar ciclo
                </button>
              )}
          </>
        )}
    </div>
  );
}

export default Countdown;