/* eslint-disable no-unused-vars */
import clsx from "clsx";

import type { variant } from "~/types/variants";
import type { colors } from "~/types/colors";

import { baseClasses } from "./baseClasses";

/**
 * Remove properties `K` from `T`.
 * Distributive for union types.
 */
export type DistributiveOmit<T, K extends keyof any> = T extends any
  ? Omit<T, K>
  : never;

/**
 * Elements that accept no children
 */
type VoidElement =
  | "area"
  | "base"
  | "br"
  | "col"
  | "hr"
  | "img"
  | "input"
  | "link"
  | "meta"
  | "param"
  | "command"
  | "keygen"
  | "source";

type OmitChildrenFromVoid<C extends React.ElementType> = C extends VoidElement
  ? Omit<React.ComponentPropsWithRef<C>, "children">
  : React.ComponentPropsWithRef<C>;

export interface OverloadedElement<P> {
  <C extends React.ElementType>(
    props: { as: C } & P & DistributiveOmit<OmitChildrenFromVoid<C>, keyof P>
  ): JSX.Element;
  (
    props: P & DistributiveOmit<React.ComponentPropsWithRef<"div">, keyof P>
  ): JSX.Element;
}

export type OverloadedElementProps = {
  as?: string | React.ElementType;
};

type ButtonTestProps = {
  children?: React.ReactNode;
  color?: colors;
  variant?: variant;
  className?: string;
} & OverloadedElementProps;

export const ButtonTest: OverloadedElement<ButtonTestProps> = ({
  as: Component = "button",
  color = "primary",
  variant = "solid",
  className,
  ...props
}: ButtonTestProps) => (
  <Component
    className={clsx(
      baseClasses.base,
      baseClasses.variant[variant][color],
      className
    )}
    {...props}
  />
);
