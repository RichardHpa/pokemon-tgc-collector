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
  test.todo("renders Navbar", () => {
    render(<Navbar />);

    const link = screen.getByRole("link", { name: /Pokemon Card Checker/i });
    expect(link).toBeInTheDocument();
  });

  test.todo("renders all links", () => {
    render(<Navbar />);
    expect(screen.getAllByRole("link")).toHaveLength(5);

    const setsLink = screen.getByRole("link", { name: /sets/i });
    expect(setsLink).toBeInTheDocument();

    const loginLink = screen.getByRole("link", { name: /log in/i });
    expect(loginLink).toBeInTheDocument();

    const registerLink = screen.getByRole("link", { name: /sign up/i });
    expect(registerLink).toBeInTheDocument();
  });

  test.todo("renders Navbar snapshot", () => {
    const { container } = render(<Navbar />);
    expect(container).toMatchSnapshot();
  });
});
