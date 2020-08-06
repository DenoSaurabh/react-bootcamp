import styled from 'styled-components';

export const CheckoutPageContainer = styled.div`
  width: 55%;
  min-height: 90vh;

  display: flex;
  flex-direction: column;

  margin: 0 auto;
  margin-bottom: 100px;

  button {
    margin-left: auto;
    margin-top: 50px;
  }

  @media screen and (max-width: 800px) {
    width: 90%;
  }
`;

export const CheckoutHeaderContainer = styled.p`
  font-size: 8rem;
  font-family: 'Made Tommy Bold';

  text-align: left;

  padding-top: 80px;
  margin-bottom: 90px;
`;

export const HeaderBlockContainer = styled.div`
  text-transform: capitalize;
  width: 23%;

  &:last-child {
    width: 8%;
  }

  @media screen and (max-width: 800px) {
    width: 22%

    &:last-child {
      width: 12%;
    }
  }
`;

export const TotalContainer = styled.div`
  margin-top: 30px;
  margin-left: auto;
  font-size: 36px;

  display: flex;
  align-items: baseline;
  justify-content: space-between;

  span {
    font-size: 2rem;
    color: grey;
  }

  p {
    font-size: 5rem;
    font-family: 'Made Tommy Bold';
  }
`;

export const WarningContainer = styled.div`
  font-family: 'Made Tommy Thin';

  text-align: center;
  margin-top: 40px;
  font-size: 24px;
  color: red;
`;
