import { render, screen } from "@testing-library/react";

import { withMarkup } from "test/helpers/withMarkup";

import { InputField } from "./InputField";

const inputProps = {
  label: "text field",
  name: "text-field",
};

describe("InputField", () => {
  test("renders InputField", () => {
    render(<InputField {...inputProps} />);
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  test("renders InputField with label", () => {
    render(<InputField {...inputProps} />);
    expect(screen.getByText("text field")).toBeInTheDocument();
  });

  test("renders InputField with required", () => {
    const { getByText } = render(<InputField {...inputProps} required />);
    const getByTextWithMarkup = withMarkup(getByText);
    getByTextWithMarkup("text field *");
  });

  test("renders InputField with error", () => {
    render(<InputField {...inputProps} error="error" />);
    expect(screen.getByText("error")).toBeInTheDocument();
  });

  test("renders InputField snapshot", () => {
    const { container } = render(<InputField {...inputProps} />);
    expect(container).toMatchSnapshot();
  });
});
