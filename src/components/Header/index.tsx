import { useContext, useState } from "react";
import { CartContext } from "../../CartContext";
import {
  CartContainer,
  CartCounter,
  HeaderContainer,
  LogoContainer,
  LogoText,
  LogoTitle,
  NavBar,
} from "./styles";
import { CheckoutMenu } from "../CheckoutMenu";
import { CartIconResponsive } from "./cartIcon";

export function Header() {
  const { cartCount } = useContext(CartContext);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuOpen = () => {
    setIsMenuOpen(true);
  };

  return (
    <HeaderContainer>
      <NavBar>
        <LogoContainer>
          <LogoTitle>MKS </LogoTitle>
          <LogoText>&nbsp;Sistemas</LogoText>
        </LogoContainer>
        <CartContainer onClick={handleMenuOpen}>
          <CartIconResponsive />
          <CartCounter>{cartCount}</CartCounter>
        </CartContainer>
      </NavBar>
      <CheckoutMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </HeaderContainer>
  );
}
