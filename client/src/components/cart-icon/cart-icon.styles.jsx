import styled from 'styled-components';

import { ReactComponent as ShoppingIconSVG } from '../../assets/svg/shopping-bag.svg';

export const CartContainer = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const ShoppingIcon = styled(ShoppingIconSVG)`
  width: 24px;
  height: 24px;
`;

export const ItemCountContainer = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  right: 0px;
  top: 4px;

  width: 20px;
  height: 20px;

  font-size: 14px;
  font-weight: bold;
  padding: 4px;

  border-radius: 100px;
  background-color: orangered;
  color: #fff;
`;
