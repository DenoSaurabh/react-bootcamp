import styled from 'styled-components';

export const CollectionPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;

  margin-bottom: 30px;
  margin-top: 135px;

  padding: 0 10rem;

  @media screen and (max-width: 800px) {
    align-items: center;
  }
`;

export const TitleContainer = styled.h1`
  font-family: 'Made Tommy Bold';
  font-size: 8rem;
  margin-bottom: 85px;
  cursor: pointer;
`;

export const PreviewContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media screen and (max-width: 800px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 15px;
  }
`;
