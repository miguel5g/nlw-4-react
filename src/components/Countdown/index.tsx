import React, { useContext, useEffect, useState } from 'react';
import { FiX } from 'react-icons/fi';

import { challengesContext } from '../../contexts/ChallengesContext';

import styles from './styles.module.css';

let countdownTimeout: NodeJS.Timeout;

const Countdown: React.FC = () => {
  const { startNewChallenge } = useContext(challengesContext);

  const [time, setTime] = useState(0.1 * 60);
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  function startCountdown() {
    setIsActive(true);
  }

  function resetCountdown() {
    clearTimeout(countdownTimeout);
    setIsActive(false);
    setTime(0.1 * 60);
  }

  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1)
      }, 1000);
    } else if (isActive && time === 0) {
      setHasFinished(true);
      setIsActive(false);
      startNewChallenge();
    }
  }, [isActive, time])

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