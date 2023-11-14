import { useContext } from "react";
import { CardProductProps, CartContext } from "../../CartContext";
import {
  CardContentBottom,
  CardContentTop,
  Content,
  DesktopContainer,
  Image,
  MobileContainer,
  Price,
  Quantity,
  QuantityButton,
  QuantityDiv,
  RemoveButton,
} from "./style";

export function CheckoutCard({
  id,
  photo,
  brand,
  name,
  price,
  quantity,
}: CardProductProps) {
  const { updateCartItemQuantity, removeFromCart } = useContext(CartContext);
  return (
    <>
      <MobileContainer key={id}>
        <CardContentTop>
          <Image src={photo}></Image>
          <RemoveButton onClick={() => removeFromCart(id)}>X</RemoveButton>
        </CardContentTop>
        <Content>
          {brand}
          {name}
        </Content>
        <CardContentBottom>
          <QuantityDiv>
            <QuantityButton
              onClick={() => updateCartItemQuantity(id, quantity - 1)}
              disabled={quantity === 1}
            >
              -
            </QuantityButton>
            <Quantity>{quantity}</Quantity>
            <QuantityButton
              onClick={() => updateCartItemQuantity(id, quantity + 1)}
            >
              +
            </QuantityButton>
          </QuantityDiv>
          <Price data-testid="checkout-price">R$ {parseFloat(price)}</Price>
        </CardContentBottom>
      </MobileContainer>

      <DesktopContainer key={id} data-testid="checkout">
        <Image src={photo}></Image>
        <Content>
          {brand}
          {name}
        </Content>
        <QuantityDiv>
          <QuantityButton
            onClick={() => updateCartItemQuantity(id, quantity - 1)}
            disabled={quantity === 1}
          >
            -
          </QuantityButton>
          <Quantity>{quantity}</Quantity>
          <QuantityButton
            onClick={() => updateCartItemQuantity(id, quantity + 1)}
          >
            +
          </QuantityButton>
        </QuantityDiv>
        <Price data-testid="checkout-price">R$ {parseFloat(price)}</Price>
        <RemoveButton onClick={() => removeFromCart(id)}>X</RemoveButton>
      </DesktopContainer>
    </>
  );
}
