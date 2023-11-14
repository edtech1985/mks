import { useContext } from "react";
import { CardProductProps, CartContext } from "../../CartContext";

import { ShoppingBagIcon } from "../ShoppingBagIcon";
import {
  CardButton,
  CardContainer,
  CardImage,
  CardPrice,
  CardImageContainer,
  CardContentTop,
  CardContentBottom,
  CardDiv,
} from "./style";

export function Card({
  id,
  photo,
  brand,
  name,
  price,
  description,
}: CardProductProps) {
  const { addToCart } = useContext(CartContext);

  return (
    <>
      <CardContainer data-testid="card-container">
        <CardImageContainer key={id}>
          <CardImage data-testid="img" src={photo} />
        </CardImageContainer>
        <CardContentTop>
          <h2>
            {brand} {name}
          </h2>
          <CardDiv>
            <CardPrice data-testid="price">R$ {parseFloat(price)}</CardPrice>
          </CardDiv>
        </CardContentTop>
        <CardContentBottom>
          <p>{description}</p>
        </CardContentBottom>
        <CardButton
          onClick={() =>
            addToCart({
              id: id,
              name: name,
              brand: brand,
              description: description,
              photo: photo,
              price: price,
              quantity: 1,
            })
          }
        >
          <ShoppingBagIcon />
          <p>COMPRAR</p>
        </CardButton>
      </CardContainer>
    </>
  );
}
