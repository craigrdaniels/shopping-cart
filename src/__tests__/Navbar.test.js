import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import Navbar from "../components/Navbar";
import { CartContext } from "../components/App";
import { MemoryRouter } from "react-router-dom";

afterEach(cleanup);

describe("Navbar component", () => {
  it("renders main navbar", () => {
    const { container } = render(
      <MemoryRouter initialEntries={[{ pathname: "/" }]}>
        <CartContext.Provider value={{ cart: [] }}>
          <Navbar />
        </CartContext.Provider>
      </MemoryRouter>
    );
    expect(container).toMatchSnapshot();
  });

  it("renders shop nav", () => {
    render(
      <MemoryRouter initialEntries={[{ pathname: "/shop" }]}>
        <CartContext.Provider value={{ cart: [] }}>
          <Navbar />
        </CartContext.Provider>
      </MemoryRouter>
    );
    expect(screen.getByText("Men")).toBeInTheDocument();
  });
});
