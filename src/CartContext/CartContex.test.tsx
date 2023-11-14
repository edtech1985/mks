import React from "react";
import { CartContext, CartProvider } from "./index";
import { render, screen } from "@testing-library/react";
import "jest-styled-components";

import "@testing-library/jest-dom/extend-expect";

describe("Context", () => {
  it("should render the component correctly", () => {
    render(
      <CartProvider>
        <CartContext.Consumer>
          {(context) => (
            <div>
              <span data-testid="cart-count">{context.cartCount}</span>
              <span data-testid="cart-total">{context.cartTotal}</span>
            </div>
          )}
        </CartContext.Consumer>
      </CartProvider>
    );
    expect(screen.getByTestId("cart-count")).toHaveTextContent("0");
    expect(screen.getByTestId("cart-total")).toHaveTextContent("0");
  });
});
