import styled from 'styled-components';
import CustomButton from '../custom-button/custom-button.component';

export const CartDropdownContainer = styled.div`
  position: absolute;
  top: 90px;
  right: 40px;

  width: 300px;
  height: 400px;
  display: flex;
  flex-direction: column;
  padding: 20px;

  background-color: white;
  border-radius: 25px;

  overflow: hidden;

  z-index: 5;
`;

export const CartDropdownButton = styled(CustomButton)`
  margin-top: auto;
`;

export const EmptyMessageContainer = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;

export const CartItemsContainer = styled.div`
  height: 280px;

  display: flex;
  flex-direction: column;

  overflow-x: hidden;
  overflow-y: scroll;
`;
