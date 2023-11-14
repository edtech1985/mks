import { render, screen } from "@testing-library/react";
import { Card } from "./index";
import "jest-styled-components";
import "@testing-library/jest-dom/extend-expect";

describe("Card", () => {
  it("should render the component correctly", () => {
    const card = {
      key: 1,
      id: 1,
      photo: "https://example.com/image.png",
      brand: "Apple",
      name: "iPhone 13",
      price: "1000",
      description: "Description",
      quantity: 1,
    };

    render(
      <Card
        key={card.key}
        id={card.id}
        name={card.name}
        brand={card.brand}
        description={card.description}
        photo={card.photo}
        price={card.price}
        quantity={card.quantity}
      />
    );
    const cardContainer = screen.getByTestId("card-container");
    expect(cardContainer).toHaveStyleRule("background", "#fff");

    const cardPrice = screen.getByTestId("price");
    expect(cardPrice).toHaveTextContent("R$ 1000");
  });
});
