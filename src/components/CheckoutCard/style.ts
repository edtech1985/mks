import styled from "styled-components";

export const DesktopContainer = styled.div`
  width: 379px;
  height: 95px;
  border-radius: 8px;
  background: #fff;
  box-shadow: -2px 2px 10px 0px rgba(0, 0, 0, 0.05);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  margin-bottom: 22px;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

export const Image = styled.img`
  width: 50px;
  height: 50px;

  @media only screen and (max-width: 768px) {
    width: 125px;
    height: 155px;
  }
`;

export const Content = styled.div`
  width: 113px;
  height: 33px;
  color: var(--text-gray);
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 17px;
  align-items: center;

  @media only screen and (max-width: 768px) {
    width: 211px;
    height: auto;
    padding-bottom: 10px;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
  }
`;

export const Price = styled.div`
  width: 62px;
  height: 17px;
  color: #000;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 17px;

  @media only screen and (max-width: 768px) {
    width: 84px;
    height: auto;
    padding: 8px 0px;
    font-size: 15px;
    line-height: 15px;
    text-align: center;
    border-radius: 5px;
    align-content: center;
    color: #fff;
    background-color: var(--bg-dark-gray);
  }
`;

export const QuantityDiv = styled.div`
  width: 50px;
  height: 19px;
  border-radius: 4px;
  border: 0.3px solid var(--border-gray);
  display: flex;
  align-items: center;
  align-self: center;

  @media only screen and (max-width: 768px) {
    height: auto;
    width: 100px;
    z-index: 1;
  }
`;

export const Quantity = styled.div`
  width: 100%;
  border-left: 0.3px solid var(--border-gray);
  border-right: 0.3px solid var(--border-gray);
  background: #fff;
  text-align: center;
  align-self: center;
  color: #000;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;

  @media only screen and (max-width: 768px) {
    font-size: 20px;
    padding: 2px;
  }
`;

export const QuantityButton = styled.button`
  width: 40px;
  color: #000;
  background: transparent;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  border: none;
  cursor: pointer;

  @media only screen and (max-width: 768px) {
    font-size: 22px;
    width: 50px;
  }
`;

export const RemoveButton = styled.button`
  width: 18px;
  height: 18px;
  background-color: #000;
  color: #fff;
  font-size: 10px;
  border-radius: 50%;
  cursor: pointer;

  @media only screen and (max-width: 768px) {
    width: auto;
    height: auto;
    font-size: 35px;
    background-color: #fff;
    color: #000;
    border: none;
  }
`;

export const MobileContainer = styled.div`
  width: 250px;
  height: auto;
  border-radius: 8px;
  background: #fff;
  box-shadow: -2px 2px 10px 0px rgba(0, 0, 0, 0.05);
  display: block;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  margin-bottom: 22px;
  z-index: 1;

  @media only screen and (min-width: 768px) {
    display: none;
  }
`;

export const CardContentBottom = styled.div`
  width: 100%;
  height: auto;
  padding-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1;
`;

export const CardContentTop = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding-left: 20%;
  padding-top: 10px;
  padding-bottom: 10px;
  box-sizing: border-box;
  z-index: 1;
`;
