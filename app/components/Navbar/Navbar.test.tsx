import { render } from "test/helpers/render";
import { screen } from "@testing-library/react";
import { Navbar } from "./Navbar";

vi.mock("~/utils", () => {
  return {
    useOptionalUser: vi.fn(),
  };
});

describe("Navbar", () => {
  afterEach(() => {
    vi.clearAllMocks();
  });
  test("renders Navbar", () => {
    render(<Navbar />);

    const link = screen.getByRole("link", { name: /Pokemon Card Checker/i });
    expect(link).toBeInTheDocument();
  });

  test("renders all links", () => {
    render(<Navbar />);
    expect(screen.getAllByRole("link")).toHaveLength(4);

    const setsLink = screen.getByRole("link", { name: /sets/i });
    expect(setsLink).toBeInTheDocument();

    const loginLink = screen.getByRole("link", { name: /login/i });
    expect(loginLink).toBeInTheDocument();

    const registerLink = screen.getByRole("link", { name: /sign up/i });
    expect(registerLink).toBeInTheDocument();
  });

  test("renders Navbar snapshot", () => {
    const { container } = render(<Navbar />);
    expect(container).toMatchSnapshot();
  });
});
