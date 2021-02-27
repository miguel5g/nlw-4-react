import React, { useContext } from 'react';
import { FiX } from 'react-icons/fi';

import { CountdownContext } from '../../contexts/CountdownContext';

import { Container, CountdownButton } from './styles';

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
      <Container>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>

        <span>:</span>

        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </Container>

      { hasFinished
        ? (
          <CountdownButton disabled>
            Ciclo encerrado
            <img src="icons/check_circle.svg" />
          </CountdownButton>
        ) : (
          <>
            { isActive
              ? (
                <CountdownButton isActive type="button" onClick={resetCountdown}>
                  Abandonar ciclo
                  <FiX size="1.5rem" style={{ marginLeft: 12 }} />
                </CountdownButton>
              )
              : (
                <CountdownButton type="button" onClick={startCountdown}>
                  Iníciar ciclo
                </CountdownButton>
              )}
          </>
        )}
    </div>
  );
}

export default Countdown;