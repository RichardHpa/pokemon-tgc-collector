import { render } from "test/helpers/render";
import { screen } from "@testing-library/react";
import { Navbar } from "./Navbar";
import { Theme, ThemeProvider } from "~/utils/theme-provider";

vi.mock("~/utils", () => {
  return {
    useOptionalUser: vi.fn(),
  };
});

vi.mock("@remix-run/react", async () => {
  let remix = await vi.importActual("@remix-run/react");
  return {
    // @ts-expect-error
    ...remix,
    // get useFetcher to return an idle state initially
    useFetcher: vi.fn().mockReturnValue({ state: "idle" }),
  };
});

describe("Navbar", () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  test("renders Navbar", () => {
    render(
      <ThemeProvider specifiedTheme={Theme.DARK}>
        <Navbar />
      </ThemeProvider>
    );

    const link = screen.getByRole("link", { name: /Pokemon Card Checker/i });
    expect(link).toBeInTheDocument();
  });

  test("renders all links", () => {
    render(
      <ThemeProvider specifiedTheme={Theme.DARK}>
        <Navbar />
      </ThemeProvider>
    );
    expect(screen.getAllByRole("link")).toHaveLength(5);

    const setsLink = screen.getByRole("link", { name: /sets/i });
    expect(setsLink).toBeInTheDocument();

    const loginLink = screen.getByRole("link", { name: /log in/i });
    expect(loginLink).toBeInTheDocument();

    const registerLink = screen.getByRole("link", { name: /sign up/i });
    expect(registerLink).toBeInTheDocument();
  });

  test("renders Navbar snapshot", () => {
    const { container } = render(
      <ThemeProvider specifiedTheme={Theme.DARK}>
        <Navbar />
      </ThemeProvider>
    );
    expect(container).toMatchSnapshot();
  });
});
