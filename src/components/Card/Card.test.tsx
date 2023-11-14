import React from "react";
import { Card } from "./index";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

describe("Card-Button", () => {
  it("should render the card button", () => {
    const card = {
      key: 1,
      id: 1,
      name: "Product 1",
      brand: "Brand",
      photo: "Photo",
      description: "Description 1",
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
    screen.getByRole("button");
    screen.getByText("COMPRAR");
  });
});

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
    screen.getByText("Description");
    screen.getByText("Brand Product 1");
  });
});

describe("Card-New", () => {
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
    screen.getByRole("button");
  });
});
