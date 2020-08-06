import styled from 'styled-components';

export const SignInContainer = styled.div`
  width: 380px;
  height: fit-content;
  display: flex;
  flex-direction: column;

  margin-top: 13rem;
`;

export const SignInTitle = styled.h2`
  font-size: 4.5rem;
  font-weight: bold;
  margin: 10px 0 80px 0;
`;

export const SignInForm = styled.form`
  height: 90%;
`;

export const ButtonsBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 6rem;

  button {
    width: 60%;
  }

  svg {
    transition: all 0.4s;

    &:hover {
      cursor: pointer;
      transform: scale(1.05);
    }
  }
`;
