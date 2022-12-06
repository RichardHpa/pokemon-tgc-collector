import { render, screen } from "@testing-library/react";

import { expansion } from "mocks/fixtures/expansions";

import { ExpansionCard } from "./ExpansionCard";

const props = {
  name: expansion.name,
  releaseDate: expansion.releaseDate,
  series: expansion.series,
  image: expansion.images.logo,
};

describe("ExpansionCard", () => {
  test("renders ExpansionCard", () => {
    render(<ExpansionCard {...props} />);
    expect(screen.getByText(expansion.name)).toBeInTheDocument();
    expect(
      screen.getByText(`${expansion.series} - ${expansion.releaseDate}`)
    ).toBeInTheDocument();
  });

  test("renders SetCard snapshot", () => {
    const { container } = render(<ExpansionCard {...props} />);
    expect(container).toMatchSnapshot();
  });
});
