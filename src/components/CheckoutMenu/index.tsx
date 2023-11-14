// import { useContext, useState } from "react";
import { useContext, Dispatch, SetStateAction } from "react";
import { CartContext } from "../../CartContext";
import {
  CheckouTitle,
  CheckoutButton,
  CheckoutContainer,
  CheckoutContent,
  CheckoutHeader,
  CheckoutSummary,
  CheckoutSummaryText,
  CheckoutSummaryValue,
  CloseButton,
  MenuFooter,
} from "./style";
import { CheckoutCard } from "../CheckoutCard";

interface CardProps {
  id: number;
  name: string;
  brand: string;
  description: string;
  photo: string;
  price: string;
  quantity: number;
}

type CheckoutMenuProps = {
  isMenuOpen: boolean;
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
};

export function CheckoutMenu({ isMenuOpen, setIsMenuOpen }: CheckoutMenuProps) {
  const { cartItems, cartTotal } = useContext(CartContext);
  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {isMenuOpen && (
        <CheckoutContainer>
          <CheckoutContent>
            <CheckoutHeader>
              <CheckouTitle>Carrinho de compras</CheckouTitle>
              <CloseButton onClick={handleMenuClose}>X</CloseButton>
            </CheckoutHeader>

            {cartItems.map((item: CardProps) => (
              <>
                <CheckoutCard
                  id={item.id}
                  name={item.name}
                  brand={item.brand}
                  description={item.description}
                  photo={item.photo}
                  price={item.price}
                  quantity={item.quantity}
                ></CheckoutCard>
              </>
            ))}
          </CheckoutContent>
          <MenuFooter>
            <CheckoutSummary>
              <CheckoutSummaryText>Total:</CheckoutSummaryText>
              <CheckoutSummaryValue>R$ {cartTotal}</CheckoutSummaryValue>
            </CheckoutSummary>
            <CheckoutButton>Finalizar compra</CheckoutButton>
          </MenuFooter>
        </CheckoutContainer>
      )}
    </>
  );
}
