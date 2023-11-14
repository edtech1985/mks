import React from "react";
import { Card } from "./index";
import { render, screen } from "@testing-library/react";
import "jest-styled-components";

import "@testing-library/jest-dom/extend-expect";

describe("Card", () => {
  it("should render the card button", () => {
    const card = {
      key: 1,
      id: 1,
      name: "Product 1",
      brand: "Brand",
      photo: "Photo",
      description: "Description",
      price: "10",
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
    screen.getByText("Brand Product 1");
  });
});

test("it works", () => {
  const card = {
    key: 1,
    id: 1,
    name: "Product 1",
    brand: "Brand",
    photo: "Photo",
    description: "Description",
    price: "10",
    quantity: 1,
  };

  const { container } = render(
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
  expect(container).toMatchSnapshot();
});
