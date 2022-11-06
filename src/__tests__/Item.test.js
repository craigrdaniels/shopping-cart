import React from "react";
import { render, screen, cleanup, waitFor } from "@testing-library/react";
import Item from "../components/pages/Item";
import { MemoryRouter } from "react-router-dom";
import { CartContext } from "../components/App";

const mockResponse = {
  id: 2,
  title: "Mens Casual Premium Slim Fit T-Shirts ",
  price: 22.3,
  description:
    "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
  category: "men's clothing",
  image:
    "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
  rating: { rate: 4.1, count: 259 },
};

beforeEach(() => {
  jest.spyOn(global, "fetch").mockResolvedValue({
    json: jest.fn().mockResolvedValue(mockResponse),
  });
});

afterEach(() => {
  jest.restoreAllMocks();
  cleanup();
});

describe("Item component", () => {
  it("renders item component", async () => {
    render(
      <MemoryRouter initialEntries={[{ pathname: "/shop/item/2" }]}>
        <CartContext.Provider value={{ cart: [], setCart: undefined }}>
          <Item />
        </CartContext.Provider>
      </MemoryRouter>
    );
    await waitFor(() => {
      expect(
        screen.getByText("Mens Casual Premium Slim Fit T-Shirts")
      ).toBeInTheDocument();
    });
  });
});
