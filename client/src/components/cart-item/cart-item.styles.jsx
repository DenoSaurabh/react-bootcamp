import styled from 'styled-components';

export const CartItemContainer = styled.div`
  width: 100%;
  display: flex;
  height: 80px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const CartItemImage = styled.img`
  width: 30%;
  border-radius: 10rem;
`;

export const ItemDetailsContainer = styled.div`
  width: 70%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  padding: 10px 20px;

  font-size: 1.9rem;

  p {
    margin: 0;
  }

  span {
    font-family: 'Made Tommy Thin';
    font-size: 1.6rem;
  }
`;
