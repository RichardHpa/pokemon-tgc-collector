import { render, screen } from "@testing-library/react";

import { withMarkup } from "test/helpers/withMarkup";

import { Checkbox } from "./Checkbox";

const checkboxProps = {
  label: "checkbox",
  name: "checkbox",
};

describe("Checkbox", () => {
  test("renders Checkbox", () => {
    render(<Checkbox {...checkboxProps} />);
    expect(screen.getByRole("checkbox")).toBeInTheDocument();
  });

  test("renders Checkbox with label", () => {
    render(<Checkbox {...checkboxProps} />);
    expect(screen.getByText("checkbox")).toBeInTheDocument();
  });

  test("renders Checkbox with required", () => {
    const { getByText } = render(<Checkbox {...checkboxProps} required />);
    const getByTextWithMarkup = withMarkup(getByText);
    getByTextWithMarkup("checkbox *");
  });

  test("renders Checkbox with error", () => {
    render(<Checkbox {...checkboxProps} error="error" />);
    expect(screen.getByText("error")).toBeInTheDocument();
  });

  test("renders Checkbox snapshot", () => {
    const { container } = render(<Checkbox {...checkboxProps} />);
    expect(container).toMatchSnapshot();
  });
});
