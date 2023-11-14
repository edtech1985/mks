import { CardProductProps } from "../../CartContext";
import { Card } from "../../components/Card";
import { CardsGrid, HomeContainer } from "./style";
import { useEffect, useState } from "react";

export const Home = () => {
  const [products, setProducts] = useState<CardProductProps[]>([]);
  useEffect(() => {
    fetch(
      "https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=ASC"
    )
      .then((response) => response.json())
      .then((data) => setProducts(data.products));
  }, []);

  return (
    <div>
      <HomeContainer>
        <CardsGrid>
          {products.map((product: CardProductProps) => (
            <Card
              key={product.id}
              id={product.id}
              name={product.name}
              brand={product.brand}
              description={product.description}
              photo={product.photo}
              price={product.price}
              quantity={product.quantity}
            />
          ))}
        </CardsGrid>
      </HomeContainer>
    </div>
  );
};
