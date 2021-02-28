import styled, { DefaultTheme } from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  width: 100vw;
  height: 100vh;

  background: url('/svg/simbolo.svg') no-repeat ${({ theme }) => theme.colors.blue};
  background-size: auto 90%;

  & > div {
    display: flex;
    flex-direction: column;

    max-width: 426px;
    margin-right: 13rem;

    & img {}

    & strong {
      margin-top: 96px;
      
      color: ${({ theme }) => theme.colors.white};
      font-size: 2rem;
      font-weight: 500;
    }
    
    & > span {
      display: flex;
      align-items: center;

      max-width: 60%;
      margin-top: 7px;

      color: ${({ theme }) => theme.colors.textHighlight};
      font-size: 1.1rem;
    }

    & > div {
      display: flex;
      flex-direction: column;

      margin-top: 40px;

      & section {
        display: flex;
      }

      & span {
        position: relative;

        margin: 24px 0;

        color: ${({ theme }) => theme.colors.white};
        font-size: 1.1rem;
        text-align: center;

        &::before, &::after {
          position: absolute;

          width: 40%;
          height: 2px;
          top: calc(50% - 1px);

          background: ${({ theme }) => theme.colors.textHighlight};
          border-radius: 5px;

          content: '';
        }

        &::before {
          left: 13px;
        }

        &::after {
          right: 13px;
        }
      }
    }
  }
`;

export const Input = styled.input`
  padding: 13px 23px;

  background: linear-gradient(90deg, #4953B8 0%, rgba(73, 83, 184, 0.2) 100%);
  border-radius: 5px 0px 0px 5px;
  border: none;
  box-sizing: border-box;

  color: ${({ theme }) => theme.colors.white};
  font-size: 1.25rem;

  outline: none;
  
  &::placeholder {
    color: ${({ theme }) => theme.colors.textHighlight};
  }

  &:hover, &:active {
    padding: 11.5px 21.5px;
    border: 1.5px solid #414AA3;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 13px;

  background: #4953B8;
  border: none;
  border-radius: 0px 5px 5px 0px;

  color: ${({ theme }) => theme.colors.white};
  font-size: 1.25rem;

  ${({theme, active}: {theme: DefaultTheme, active: boolean}) => active ? `
    background: ${theme.colors.green};
  `: ''};
`;

export const GithubButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  padding: 13px;

  background: ${({ theme }) => theme.colors.grayGithub};
  border-radius: 5px;
  border: none;

  color: ${({ theme }) => theme.colors.white};
  font-size: 1.25rem;

  & > svg {
    margin-right: 13px;
  }

  &:disabled {
    color: ${({ theme }) => theme.colors.textHighlight};

    cursor: not-allowed;
  }
`;
