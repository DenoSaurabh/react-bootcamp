import styled from 'styled-components';

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;

  margin-bottom: 40px;

  @media screen and (max-width: 800px) {
    font-size: 18px;
  }
`;

export const ImageContainer = styled.div`
  padding-right: 15px;

  img {
    width: 10rem;
    height: 10rem;

    border-radius: 100rem;
  }
`;

export const TextContainer = styled.span`
  width: 23%;
  font-family: Quicksand, sans-serif;
  font-weight: 700;

  @media screen and (max-width: 800px) {
    width: 22%;
  }
`;

export const QuantityContainer = styled(TextContainer)`
  display: flex;
  align-items: center;

  span {
    margin: 0 10px;
  }

  div {
    cursor: pointer;
  }
`;

export const RemoveButtonContainer = styled.div`
  padding-left: 12px;
  cursor: pointer;
`;
