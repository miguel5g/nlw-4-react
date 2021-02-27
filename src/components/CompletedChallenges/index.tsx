import React, { useContext } from 'react';

import { challengesContext } from '../../contexts/ChallengesContext';

import { Container } from './styles';

const CompletedChallenges: React.FC = () => {
  const { challengesCompleted } = useContext(challengesContext);

  return (
    <Container>
      <span>Desafios completos</span>
      <span>{challengesCompleted || 0}</span>
    </Container>
  );
}

export default CompletedChallenges;