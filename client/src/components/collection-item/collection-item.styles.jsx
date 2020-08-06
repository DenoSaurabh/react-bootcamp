import styled from 'styled-components';

export const CollectionItemContainer = styled.div`
  width: 13vw;
  min-width: 210px;

  margin: 80px 60px;

  display: flex;
  flex-direction: column;
  height: 500px;
  align-items: center;
  position: relative;
`;

export const BackgroundImage = styled.div`
  width: 100%;
  min-width: 100%;

  height: 95%;

  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
  border-radius: 26px;
  border: 6px solid #fff;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  background-blend-mode: screen;
  margin-bottom: 20px;

  transition: all 0.2s;

  &:hover {
    transform: scaleX(1.15) scaleY(1.2) translateY(-10%);

    background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  }
`;

export const CollectionFooterContainer = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 18px;

  padding-left: 15px;

  button {
    margin-left: -15px;
  }
`;

export const NameContainer = styled.span`
  font-family: 'Made Tommy Medium';
  font-weight: lighter;

  width: 90%;
  margin-bottom: 15px;
`;

export const PriceContainer = styled.span`
  font-family: 'Made Tommy Thin';

  width: 10%;
  text-align: right;

  margin-bottom: 30px;
`;
