import type { Variant } from "~/types/variants";
import type { colors } from "~/types/colors";
import type { OverloadedElementProps } from "~/types/overloadedElement";

import type { MouseEventHandler } from "react";

export type ButtonProps = {
  className?: string;
  color?: colors;
  variant?: Variant;
  disabled?: boolean;
  onClick?: MouseEventHandler;
  full?: boolean;
  children: React.ReactNode;
} & React.ComponentPropsWithoutRef<"button"> &
  OverloadedElementProps;

export type OverloadedButtonProps =
  | (Required<OverloadedElementProps> & any)
  | ButtonProps;
