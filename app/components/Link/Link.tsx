import { Link as RemixLink } from "@remix-run/react";
import clsx from "clsx";

import type { LinkProps, AnchorLinkProps } from "./types";

export const Link = ({ to, children, className }: LinkProps) => {
  return (
    <RemixLink to={to} className={clsx("text-blue-500 underline", className)}>
      {children}
    </RemixLink>
  );
};

export const AnchorLink = ({ href, children, className }: AnchorLinkProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={clsx("text-blue-500 underline", className)}
    >
      {children}
    </a>
  );
};
