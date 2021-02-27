import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  
  color: ${({ theme }) => theme.colors.title};
  font-family: 'Rajdhani', sans-serif;
  font-weight: 600;

  & > div {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    background: ${({ theme }) => theme.colors.white};
    box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
    border-radius: 5px;

    font-size: 8.5rem;
    text-align: center;

    & span:first-child {
      flex: 1;

      border-right: solid 1px ${({ theme }) => theme.colors.grayLine};
    }

    & span:last-child {
      flex: 1;

      border-left: solid 1px ${({ theme }) => theme.colors.grayLine};
    }
  }

  & > span {
    font-size: 6.25rem;
    margin: 0 0.5rem;
  }
`;

export const CountdownButton = styled.button`
  width: 100%;
  height: 5rem;

  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  border-radius: 5px;

  background: ${({ theme }) => theme.colors.blue};
  color: ${({ theme }) => theme.colors.white};

  font-size: 1.25rem;
  font-weight: 600;

  transition: background-color 0.2s;

  &:not(:disabled):hover {
    background: ${({ theme }) => theme.colors.blueDark};
  }

  &:disabled {
    background: ${({ theme }) => theme.colors.white};
    border-bottom: solid 4px ${({ theme }) => theme.colors.green};
    
    color: ${({ theme }) => theme.colors.text};

    cursor: not-allowed;
  }

  img {
    margin-left: 12px;
  }

  ${({ isActive }: { isActive?: boolean }) => isActive && `
    background: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.title};

    &:not(:disabled):hover {
      background: ${({ theme }) => theme.colors.red};
      color: ${({ theme }) => theme.colors.white};
    }
  `}
`;
