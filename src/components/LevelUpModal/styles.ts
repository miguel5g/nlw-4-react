import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  background: rgba(242, 243, 245, 0.8);
`;

export const Container = styled.div`
  position: relative;

  width: 100%;
  max-width: 400px;

  background: ${({ theme }) => theme.colors.white};
  border-radius: 5px;
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);

  text-align: center;

  & > div {
    padding: 2rem 3rem;
  }

  & div header {
    background: url('/icons/levelup.svg') no-repeat center;
    background-size: contain;

    color: ${({ theme }) => theme.colors.blue};
    font-size: 8.75rem;
    font-weight: 600;
  }

  & div strong {
    color: ${({ theme }) => theme.colors.title};
    font-size: 2.25rem;
  }

  & div p {
    font-size: 1.25rem;
    
    color: ${({ theme }) => theme.colors.text};
    margin-top: 0.25rem;
  }

  & div button {
    position: absolute;

    right: 0.5rem;
    top: 0.5rem;

    background: none;
    border: none;

    font-size: 0;
  }
`;

export const ShareButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 80px;

  background: ${({ theme }) => theme.colors.blueLight};
  border-radius: 0px 0px 5px 5px;
  border: none;
  border-top: solid 1px ${({ theme }) => theme.colors.grayLine};

  color: ${({ theme }) => theme.colors.blueTwitter};
  font-size: 1.25rem;
  font-weight: 600;

  transition: 0.2s;

  & > svg {
    margin-left: 14px;
  }

  &:hover {
    background: ${({ theme }) => theme.colors.blueTwitter};
    color: ${({ theme }) => theme.colors.white};
  }
`;
