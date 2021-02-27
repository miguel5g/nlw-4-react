import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;

  & img {
    width: 5.5rem;
    height: 5.5rem;
    border-radius: 50%;
  }

  & div {
    margin-left: 1.5rem;

    & strong {
      color: ${({ theme }) => theme.colors.title};
      font-size: 1.5rem;
      font-weight: 600;
    }

    & p {
      margin-top: 0.5rem;
      
      font-size: 1rem;
      
      & img {
        height: 1.2rem;
        width: 1.2rem;
        margin-right: 0.5rem;
      }
    }
  }
`;
