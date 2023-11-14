import styled from "styled-components";

export const CheckoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--bg-blue);
  height: 100vh;
  position: fixed;
  width: auto;
  min-width: 482px;
  top: 0;
  right: 0;
  box-shadow: -2px 0px 8px 0px rgba(0, 0, 0, 0.14);
  z-index: 999;
  overflow-y: scroll;

  @media only screen and (max-width: 768px) {
    width: 87vw;
    min-width: 80vw;
    height: 100vh;
    position: fixed;
  }
`;

export const CheckoutHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 30px;
  margin-top: 30px;
  top: 0;
  right: 0;
  position: relative;

  @media only screen and (max-width: 768px) {
    max-width: 100vw;
  }
`;

export const CheckouTitle = styled.h2`
  color: #fff;
  text-align: left;
  font-size: 27px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  white-space: break-spaces;
  width: 60%;
  padding: 0 2rem;
`;

export const CloseButton = styled.button`
  background-color: #000000;
  width: 38px;
  height: 38px;
  border: none;
  border-radius: 50%;
  color: #ffffff;
  font-size: 20px;
  font-weight: 400;
  cursor: pointer;
  margin-right: 2rem;

  @media only screen and (max-width: 768px) {
    width: 45px;
    height: 45px;
    color: var(--bg-blue);
    position: absolute;
    font-size: 30px;
    top: 0;
    right: 0;
  }
`;

export const CheckoutContent = styled.div`
  padding: 0 2rem;

  @media only screen and (max-width: 768px) {
    padding-right: 0;
    padding-left: 0;
    padding-top: 1rem;
    justify-items: center;
    width: auto;
    margin-bottom: 250px;
  }
`;

export const MenuFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 97px;
  bottom: 0;
  position: relative;
  z-index: 10;

  @media only screen and (max-width: 768px) {
    width: 87vw;
    position: fixed;
    right: 0;
    height: auto;
    background-color: var(--bg-blue);
  }
`;

export const CheckoutSummary = styled.div`
  display: flex;
  justify-content: space-between;
  color: #ffffff;
  width: 100%;
  position: relative;
  bottom: 75px;
  background-color: var(--bg-blue);
  height: auto;
  padding-bottom: 1.5rem;
  padding-top: 1rem;
  margin-bottom: 6rem;

  @media only screen and (max-width: 768px) {
    margin: 0 1rem;
    bottom: 65px;
  }
`;

export const CheckoutSummaryText = styled.p`
  font-size: 1.25rem;
  padding-left: 2rem;

  @media only screen and (max-width: 768px) {
    font-size: 28px;
    font-weight: 700;
  }
`;

export const CheckoutSummaryValue = styled.p`
  font-size: 1.25rem;
  font-weight: bold;
  padding-right: 2rem;

  @media only screen and (max-width: 768px) {
    font-size: 28px;
    font-weight: 700;
    width: auto;
  }
`;

export const CheckoutButton = styled.button`
  color: #ffffff;
  background-color: #000000;
  min-width: 482px;
  border: none;
  position: fixed;
  bottom: 0;
  padding: 1rem 2rem;
  cursor: pointer;
  font-size: 1.2rem;
  &:hover {
    background-color: var(--bg-dark-gray);
  }
  @media only screen and (max-width: 768px) {
    height: 65px;
    font-size: 20px;
    font-weight: 700;
    padding: 0.5rem;
    width: 100%;
  }
`;
