import React, { useContext } from 'react';

import { challengesContext } from '../../contexts/ChallengesContext';
import { CountdownContext } from '../../contexts/CountdownContext';

import { ChallengeActive, ChallengeFailedButton, ChallengeNotActive, ChallengeSucceededButton, Container } from './styles';

const ChallengeBox: React.FC = () => {
  const { activeChallenge, resetChallenge, completeChallenge } = useContext(challengesContext);
  const { resetCountdown } = useContext(CountdownContext);

  function handleChallengeSucceeded() {
    completeChallenge();
    resetCountdown();
  }

  function handleChallengeFailed() {
    resetChallenge();
    resetCountdown();
  }

  return (
    <Container>
      {activeChallenge
        ? (
          <ChallengeActive>
            <header>Ganhe {activeChallenge.amount} xp</header>
            <main>
              <img src={`icons/${activeChallenge.type}.svg`} alt="Challenge Icon" />
              <strong>Novo desafio</strong>
              <p>
                {activeChallenge.description}
              </p>

            </main>
            <footer>
              <ChallengeFailedButton
                type="button"
                onClick={handleChallengeFailed}
              >Falhei</ChallengeFailedButton>
              <ChallengeSucceededButton
                type="button"
                onClick={handleChallengeSucceeded}
              >Completei</ChallengeSucceededButton>
            </footer>
          </ChallengeActive>
        ) : (
          <ChallengeNotActive>
            <strong>Finalize um ciclo para receber um desafio</strong>
            <p>
              <img src="icons/level-up.svg" alt="Level Up" />
              Avance de level completando desafios.
            </p>
          </ChallengeNotActive>
        )}
    </Container>
  );
}

export default ChallengeBox;