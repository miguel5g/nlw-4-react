import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  align-items: center;

  margin-bottom: 1.3rem;

  & span {
    font-size: 1rem;
  }

  & > div {
    position: relative;
    flex: 1;

    height: 4px;
    margin: 0 1.5rem;

    background: ${({ theme }) => theme.colors.grayLine};
    border-radius: 4px;

    & > div {
      height: 4px;

      background: ${({ theme }) => theme.colors.green};
      border-radius: 4px;
    }

    & > span {
      position: absolute;
      top: 13px;

      transform: translateX(-50%);
    }
  }
`;
