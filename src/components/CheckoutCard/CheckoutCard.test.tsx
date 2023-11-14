import React from "react";
import { CheckoutCard } from "./index";
import { render, screen } from "@testing-library/react";
import "jest-styled-components";

import "@testing-library/jest-dom/extend-expect";

describe("CheckoutCard", () => {
  it("should render the component correctly", () => {
    const card = {
      key: 1,
      id: 1,
      photo: "https://example.com/image.png",
      brand: "Apple",
      name: "iPhone 15",
      price: "600",
      description: "Product Description",
      quantity: 2,
    };

    render(
      <CheckoutCard
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
    const CheckoutCardTest = screen.getByTestId("checkout");
    expect(CheckoutCardTest).toHaveTextContent("600");
    expect(CheckoutCardTest).toHaveTextContent("iPhone 15");
    expect(CheckoutCardTest).toHaveTextContent("600");
    expect(CheckoutCardTest).toHaveTextContent("Apple");
  });
});
