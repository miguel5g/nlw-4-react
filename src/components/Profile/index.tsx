import React, { useContext } from 'react';

import { ChallengesContext } from '../../contexts/ChallengesContext';
import { UserContext } from '../../contexts/UserContext';

import { Container } from './styles';

const Profile: React.FC = () => {
  const { level } = useContext(ChallengesContext);
  const { name, avatarUrl } = useContext(UserContext);

  return (
    <Container>
      <img src={avatarUrl} alt="Miguel Ângelo" />
      <div>
        <strong>{name}</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </div>
    </Container>
  );
}

export default Profile;