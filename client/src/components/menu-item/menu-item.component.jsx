import React from 'react';
import { withRouter } from 'react-router-dom';

import CustomButton from '../custom-button/custom-button.component';

import {
  MenuItemContainer,
  BackgroundImageContainer,
  ContentContainer,
  ContentTitle,
} from './menu-item.styles';

const MenuItem = ({
  title,
  imageUrl,
  size,
  history,
  linkUrl,
  match,
  theme,
}) => (
  <MenuItemContainer size={size}>
    <ContentContainer className="content">
      <ContentTitle>{title}</ContentTitle>
      <CustomButton
        theme={theme}
        onClick={() => history.push(`${match.url}${linkUrl}`)}
      >
        view collection
      </CustomButton>
    </ContentContainer>
    <BackgroundImageContainer
      className="background-image"
      imageUrl={imageUrl}
    />
  </MenuItemContainer>
);

export default withRouter(MenuItem);
