import React from "react";
import { Footer } from "./index";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

describe("Footer", () => {
  it("should render the footer", () => {
    render(<Footer />);
    expect(
      screen.getByText("MKS sistemas © Todos os direitos reservados")
    ).toBeInTheDocument();
  });
});
