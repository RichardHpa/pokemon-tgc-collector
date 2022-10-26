import type { MatcherFunction } from "@testing-library/react";

type Query = (_f: MatcherFunction) => HTMLElement;

/*
 * withMarkup is a helper function that allows you to use RTL queries with on strings that might be broken up by multiple elements.
 *
 * const getByTextWithMarkup = withMarkup(screen.getByText);
 * expect(getByTextWithMarkup('test')).toBeInTheDocument();
 */
export const withMarkup =
  (query: Query) =>
  (text: string): HTMLElement =>
    query((_content: string, node: any) => {
      const hasText = (element: HTMLElement) => element.textContent === text;
      // eslint-disable-next-line testing-library/no-node-access
      const childrenDontHaveText = Array.from(node.children).every(
        (child) => !hasText(child as HTMLElement)
      );
      return hasText(node) && childrenDontHaveText;
    });
