import styled from "styled-components";

export const Main = styled.main`
  max-width: 100vw;
  min-height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  z-index: 0;

  @media only screen and (max-width: 600px) {
    min-height: 100vh;
    height: auto;
    max-height: 100%;
  }
`;
