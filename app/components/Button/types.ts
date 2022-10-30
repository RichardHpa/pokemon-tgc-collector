import type { variant } from "~/types/variants";
import type { colors } from "~/types/colors";
import type { OverloadedElementProps } from "~/types/overloadedElement";

import type { MouseEventHandler } from "react";

export type ButtonProps = {
  className?: string;
  color?: colors;
  variant?: variant;
  disabled?: boolean;
  onClick?: MouseEventHandler;
  full?: boolean;
} & React.ComponentPropsWithoutRef<"button"> &
  OverloadedElementProps;

export type OverloadedButtonProps =
  | (Required<OverloadedElementProps> & any)
  | ButtonProps;
