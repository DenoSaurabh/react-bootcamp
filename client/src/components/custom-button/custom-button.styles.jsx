import styled, { css } from 'styled-components';

const buttonStyles = css`
  background-color: ${(props) => props.theme};
  color: #000;
  border: none;
  font-family: 'Made Tommy Medium';
  border-radius: 15px;

  transition: all 0.3s;

  &:hover {
    transform: translateY(-6%) scale(1.04);
  }
`;

export const CustomButtonContainer = styled.button`
  min-width: 165px;
  width: auto;
  letter-spacing: 0.5px;
  padding: 20px 35px;
  font-size: 15px;
  cursor: pointer;
  display: flex;
  justify-content: center;

  ${buttonStyles}
`;
