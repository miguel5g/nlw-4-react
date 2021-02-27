import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  
  height: 100vh;
  max-width: 992px;
  margin: 0 auto;
  padding: 2rem;

  & > section {
    flex: 1;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 6.25rem;
    align-content: center;
  }
`;
