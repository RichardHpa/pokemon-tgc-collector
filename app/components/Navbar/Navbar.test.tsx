import { render, screen } from "test/helpers/render";
import { Navbar, NavLink } from "./Navbar";

describe("Navbar", () => {
  test("renders Navbar", () => {
    render(<Navbar />);

    const link = screen.getByRole("link", { name: /Pokemon Card Checker/i });
    expect(link).toBeInTheDocument();
  });

  test("renders all links", () => {
    render(<Navbar />);
    expect(screen.getAllByRole("link")).toHaveLength(2);

    const setsLink = screen.getByRole("link", { name: /sets/i });
    expect(setsLink).toBeInTheDocument();
  });

  test("renders Navbar snapshot", () => {
    const { container } = render(<Navbar />);
    expect(container).toMatchSnapshot();
  });
});

describe("NavLink", () => {
  test("renders NavLink", () => {
    render(<NavLink to="/sets">Sets</NavLink>);
    const link = screen.getByRole("link", { name: /sets/i });
    expect(link).toBeInTheDocument();
  });

  test("renders NavLink snapshot", () => {
    const { container } = render(<NavLink to="/sets">Sets</NavLink>);
    expect(container).toMatchSnapshot();
  });
});
