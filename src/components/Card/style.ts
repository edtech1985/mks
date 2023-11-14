import styled from "styled-components";

export const CardContainer = styled.div`
  width: 218px;
  height: 285px;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.14);
`;

export const CardImageContainer = styled.div`
  width: 100%;
  height: auto;
  border-radius: 8px;
  align-items: center;
  display: flex;
  justify-content: center;
`;

export const CardImage = styled.img`
  width: auto;
  max-width: 170px;
  height: 138px;
  padding-top: 10px;
`;

export const CardContentTop = styled.div`
  width: 100%;
  height: 38px;
  padding: 13px 13px 8px;
  display: flex;

  h2 {
    color: var(--text-gray);
    white-space: break-spaces;
    width: 60%;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 19px;
  }
`;

export const CardContentBottom = styled.div`
  height: 45px;
  padding: 0px 13px 12px;
  overflow: hidden;

  p {
    color: var(--text-gray);
    height: auto;
    font-size: 10px;
    font-style: normal;
    font-weight: 300;
    line-height: 12px;
  }
`;

export const CardTitle = styled.h3`
  color: var(--text-gray);
  white-space: break-spaces;
  width: 60%;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 19px;
`;

export const CardDiv = styled.div`
  display: flex;
  justify-content: center;
  vertical-align: middle;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  align-self: center;
`;

export const CardPrice = styled.p`
  width: 64px;
  height: 26px;
  border-radius: 5px;
  background: var(--bg-dark-gray);
  color: #fff;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  text-align: center;
  align-items: center;
  justify-content: center;
  display: flex;
`;

export const CardButton = styled.button`
  width: 218px;
  height: 32px;
  border-radius: 0px 0px 8px 8px;
  background: var(--bg-blue);
  color: #fff;
  bottom: 0;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 14px;
  cursor: pointer;

  p {
    color: #fff;
    font-family: Montserrat;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 18px; /* 128.571% */
  }
`;
