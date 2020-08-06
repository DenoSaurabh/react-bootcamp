import styled from 'styled-components';

export const MenuItemContainer = styled.div`
  position: relative;

  height: 100vh;
  width: 100%;

  overflow: hidden;
  flex: 1 1 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 700px) {
    flex-direction: column-reverse;

    align-content: stretch;
  }
`;

export const BackgroundImageContainer = styled.div`
  width: 40%;
  min-width: 400px;
  height: 100%;
  background-size: cover;
  background-position: center;

  background-image: ${({ imageUrl }) => `url(${imageUrl})`};

  @media only screen and (max-width: 700px) {
    width: 100%;
  }
`;

export const ContentContainer = styled.div`
  align-self: stretch;
  flex-grow: 1;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;

  padding: 10px 10%;

  button {
    margin-top: 5rem;
    width: 34%;
    min-width: 200px;
  }
`;

export const ContentTitle = styled.span`
  font-family: 'Made Tommy Bold';
  font-size: 12rem;
  color: #272928;

  margin-bottom: 6px;
`;
