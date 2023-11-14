import React from "react";
import { Header } from "./index";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

describe("Home", () => {
  it("should render the header", () => {
    render(<Header />);
    expect(screen.getByText("MKS")).toBeInTheDocument();
    expect(screen.getByText("Sistemas")).toBeInTheDocument();
  });
});
