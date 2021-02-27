import React, { useContext } from 'react';

import { challengesContext } from '../../contexts/ChallengesContext';

import { Container } from './styles';

const Profile: React.FC = () => {
  const { level } = useContext(challengesContext);

  return (
    <Container>
      <img src="https://github.com/miguel5g.png" alt="Miguel Ângelo" />
      <div>
        <strong>Miguel Ângelo</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </div>
    </Container>
  );
}

export default Profile;