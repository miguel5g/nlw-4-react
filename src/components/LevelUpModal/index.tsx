import React, { useContext } from 'react';
import { FaTwitter } from 'react-icons/fa';

import { ChallengesContext } from '../../contexts/ChallengesContext';

import { Container, Overlay, ShareButton } from './styles';

const LevelUpModal: React.FC = () => {
  const { level, closeLevelUpModal } = useContext(ChallengesContext);

  return (
    <Overlay>
      <Container>
        <div>
          <header>{level}</header>

          <strong>Parabéns</strong>
          <p>Você alcançou um novo level.</p>

          <button type="button" onClick={closeLevelUpModal}>
            <img src="/icons/close.svg" alt="Fechar modal" />
          </button>
        </div>

        <ShareButton
          rel="noopener noreferrer"
          href={`https://twitter.com/intent/tweet?text=Avancei%20para%20o%20nível%20${level}%20no%20moevit!%20https://moevit.vercel.app/`}
          target="_blank"
        >
          Compartilhar no Twitter
          <FaTwitter />
        </ShareButton>
      </Container>
    </Overlay>
  );
}

export default LevelUpModal;