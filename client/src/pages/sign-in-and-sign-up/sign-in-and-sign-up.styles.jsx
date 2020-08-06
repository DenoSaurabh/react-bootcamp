import styled from 'styled-components';

export const SignInAndSignUpContainer = styled.div`
  min-width: 300px;
  display: flex;
  justify-content: space-around;

  margin-bottom: 80px;

  @media screen and (max-width: 1200px) {
    flex-direction: column;
    width: unset;
    align-items: center;

    > *:first-child {
      margin-bottom: 150px;
    }
  }
`;
