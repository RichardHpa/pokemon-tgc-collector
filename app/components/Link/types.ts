import type { LinkProps as RemixLinkProps } from "@remix-run/react";

export interface AnchorLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}
export interface LinkProps extends RemixLinkProps {
  children: React.ReactNode;
  className?: string;
}
