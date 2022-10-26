import { render, screen } from "@testing-library/react";

import { withMarkup } from "test/helpers/withMarkup";

import { InputField } from "./InputField";

describe("InputField", () => {
  test("renders InputField", () => {
    render(<InputField label="text field" />);
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  test("renders InputField with label", () => {
    render(<InputField label="text field" />);
    expect(screen.getByText("text field")).toBeInTheDocument();
  });

  test("renders InputField with required", () => {
    const { getByText } = render(<InputField label="text field" required />);
    const getByTextWithMarkup = withMarkup(getByText);
    getByTextWithMarkup("text field *");
  });

  test("renders InputField with error", () => {
    render(<InputField label="text field" error="error" />);
    expect(screen.getByText("error")).toBeInTheDocument();
  });

  test("renders InputField snapshot", () => {
    const { container } = render(<InputField label="text field" />);
    expect(container).toMatchSnapshot();
  });
});
