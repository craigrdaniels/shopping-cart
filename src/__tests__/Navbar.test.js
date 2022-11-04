import React from "react";
import { render } from "@testing-library/react";
import Navbar from "../components/Navbar";

import "react-router-dom";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: () => ({
    pathname: "/",
  }),
}));

describe("Navbar component", () => {
  it("renders navbar", () => {
    const { container } = render(<Navbar />);
    expect(container).toMatchSnapshot();
  });
});
