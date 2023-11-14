import styled from "styled-components";

export const HomeContainer = styled.div`
  width: 100vw;
  height: 100%;
  margin: 50px auto;
`;

export const CardsGrid = styled.div`
  width: auto;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(4, 2fr);
  row-gap: 31px;
  column-gap: 10px;
  justify-items: center;
  padding: 0 2rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }

  @media (min-width: 1200px) {
    padding: 0 15rem;
  }
`;
