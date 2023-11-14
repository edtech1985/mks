import styled from "styled-components";

export const HeaderContainer = styled.header`
  max-width: 100%;
  height: auto;
  min-height: 101px;
  background-color: var(--bg-blue);

  @media (max-width: 768px) {
    min-height: 48px;
  }
`;

export const NavBar = styled.nav`
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LogoContainer = styled.div`
  display: flex;
  height: auto;
  padding: 28px 0 28px 65px;
  align-items: center;

  @media (max-width: 768px) {
    padding: 4px 0 4px 15px;
  }
`;

export const LogoTitle = styled.h1`
  color: #fff;
  font-size: 40px;
  font-style: normal;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

export const LogoText = styled.h2`
  color: #fff;
  font-size: 20px;
  font-style: normal;
  font-weight: 300;
  padding-top: 10px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const CartContainer = styled.div`
  display: flex;
  background-color: white;
  width: 90px;
  height: 45px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin-right: 88px;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 52px;
    height: 26px;
    margin-right: 15px;
    gap: 8px;
  }
`;

export const CartCounter = styled.div`
  display: flex;
  color: #000;
  font-size: 18px;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;
