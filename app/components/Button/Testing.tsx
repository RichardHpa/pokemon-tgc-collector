/* eslint-disable no-unused-vars */
export interface ElementAlt1Props {
  className?: string | undefined;
}

export type DistributiveOmit<T, K extends keyof any> = T extends any
  ? Omit<T, K>
  : never;

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

// export type ElementProps = ElementAlt1Props & OverloadedElementProps;
export type ElementProps = ElementAlt1Props;

// export const Element: OverloadedElement<ElementProps> = ({
//   as: Component = "div",
//   className = "",
//   ...props
// }: ElementProps) => <Component className={className} {...props} />;

export const Element: OverloadedElement<ElementProps> = ({
  as: Component = "div",
  className = "",
  ...props
}) => <Component className={className} {...props} />;
