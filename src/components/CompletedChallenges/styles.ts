import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 1.7rem 0 2.7rem;
  padding-bottom: 1rem;
  border-bottom: solid 1px ${({ theme }) => theme.colors.grayLine};

  font-weight: 500;

  span:first-child {
    font-size: 1.25rem;
  }

  span:last-child {
    font-size: 1.5rem;
  }
`;
