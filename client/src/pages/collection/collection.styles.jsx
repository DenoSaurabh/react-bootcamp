import styled from 'styled-components';

export const CollectionPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 80%;
  height: 100rem;

  margin: 0 auto;

  @media screen and (max-width: 1100px) {
    width: 90%;
  }

  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;

export const CollectionTitle = styled.h2`
  font-size: 9rem;
  margin-top: 15rem;
  margin-bottom: 8rem;

  @media screen and (max-width: 800px) {
    padding-left: 40px;
  }
`;

export const CollectionItemsContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;

  min-height: 1500px;
  height: 100%;

  @media screen and (max-width: 800px) {
  }
`;
