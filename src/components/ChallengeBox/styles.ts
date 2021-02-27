import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 100%;
  padding: 1.5rem 2rem;

  background: ${({ theme }) => theme.colors.white};
  border-radius: 5px;
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);

  text-align: center;
`;

export const ChallengeActive = styled.div`
  display: flex;
  flex-direction: column;

  height: 100%;

  & header {
    padding: 0 2rem 1.5rem;

    border-bottom: solid 1px ${({ theme }) => theme.colors.grayLine};

    color: ${({ theme }) => theme.colors.blue};
    font-weight: 600;
    font-size: 1.25rem;
  }

  & main {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    & strong {
      margin: 1.5rem 0 1rem;

      color: ${({ theme }) => theme.colors.title};
      font-size: 2rem;
      font-weight: 600;
    }

    & p {
      line-height: 1.5;
    }
  }

  & footer {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }
`;

export const ChallengeNotActive = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & strong {
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 1.4;
  }

  & p {
    display: flex;
    flex-direction: column;
    align-items: center;

    max-width: 70%;
    margin-top: 3rem;

    line-height: 1.4;

    & img {
      margin-bottom: 1rem;
    }
  }
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 3rem;

  border: none;
  border-radius: 5px;

  color: ${({ theme }) => theme.colors.white};
  font-size: 1rem;
  font-weight: 600;

  transition: all 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
`;

export const ChallengeFailedButton = styled(Button)`
  background: ${({ theme }) => theme.colors.red};
`;

export const ChallengeSucceededButton = styled(Button)`
  background: ${({ theme }) => theme.colors.green};
`;
