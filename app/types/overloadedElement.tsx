/* eslint-disable no-unused-vars */
import type {
  ElementType,
  ComponentPropsWithRef,
  ForwardRefExoticComponent,
} from "react";
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

type OmitChildrenFromVoid<C extends ElementType> = C extends VoidElement
  ? Omit<ComponentPropsWithRef<C>, "children">
  : ComponentPropsWithRef<C>;

export interface OverloadedElement<P> {
  <C extends ElementType>(
    props: { as: C } & P & DistributiveOmit<OmitChildrenFromVoid<C>, keyof P>
  ): JSX.Element;
  (
    props: P & DistributiveOmit<ComponentPropsWithRef<"div">, keyof P>
  ): JSX.Element;
}

export type OverloadedElementProps = {
  as?: string | ElementType;
};
