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
  padding: 2rem 3rem;

  background: ${({ theme }) => theme.colors.white};
  border-radius: 5px;
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);

  text-align: center;

  & header {
    background: url('/icons/levelup.svg') no-repeat center;
    background-size: contain;

    color: ${({ theme }) => theme.colors.blue};
    font-size: 8.75rem;
    font-weight: 600;
  }

  & strong {
    color: ${({ theme }) => theme.colors.title};
    font-size: 2.25rem;
  }

  & p {
    font-size: 1.25rem;
    
    color: ${({ theme }) => theme.colors.text};
    margin-top: 0.25rem;
  }

  & button {
    position: absolute;

    right: 0.5rem;
    top: 0.5rem;

    background: none;
    border: none;

    font-size: 0;
  }
`;
