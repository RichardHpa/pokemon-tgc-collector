import type { MatcherFunction } from "@testing-library/react";

type Query = (f: MatcherFunction) => HTMLElement;

export const withMarkup =
  (query: Query) =>
  (text: string): HTMLElement =>
    query((_content: string, node: any) => {
      const hasText = (node: HTMLElement) => node.textContent === text;
      const childrenDontHaveText = Array.from(node.children).every(
        (child) => !hasText(child as HTMLElement)
      );
      return hasText(node) && childrenDontHaveText;
    });
