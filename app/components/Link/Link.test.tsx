import { render, screen } from "@testing-library/react";

import { MemoryRouter } from "react-router";

import { Link, AnchorLink } from "./Link";

describe("Link", () => {
  test("renders Link", () => {
    render(
      <MemoryRouter>
        <Link to="/">Test</Link>
      </MemoryRouter>
    );
    const link = screen.getByRole("link", { name: /test/i });
    expect(link).toBeInTheDocument();
  });
});

describe("AnchorLink", () => {
  test("renders AnchorLink", () => {
    render(<AnchorLink href="https://remix.run">Test</AnchorLink>);
    const link = screen.getByRole("link", { name: /test/i });
    expect(link).toBeInTheDocument();
  });
});
