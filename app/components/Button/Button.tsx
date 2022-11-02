import React from "react";
import clsx from "clsx";

import { baseClasses } from "./baseClasses";

import type { ButtonProps, OverloadedButtonProps } from "./types";

export const Button = React.forwardRef(
  ({ as = "button", ...props }: OverloadedButtonProps, ref: any) =>
    React.createElement(ButtonBase, { as, ref, ...props })
);
Button.displayName = "Button";

export const ButtonBase = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      color = "primary",
      className,
      variant = "solid",
      disabled,
      onClick,
      full = false,
      as: Component = "button",
      ...props
    }: ButtonProps,
    ref
  ) => {
    return (
      <Component
        disabled={disabled}
        ref={ref}
        onClick={onClick}
        className={clsx(
          baseClasses.base,
          baseClasses.variant[variant][color],
          { [baseClasses.disabled]: disabled },
          { [baseClasses.full]: full },
          className
        )}
        {...props}
      />
    );
  }
);

ButtonBase.displayName = "ButtonBase";
