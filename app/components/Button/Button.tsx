import React from "react";
import clsx from "clsx";

import { baseClasses } from "./baseClasses";

import type { ButtonProps, OverloadedButtonProps } from "./types";

// NOTE: This isn't actually working as expected yet. If I switch OverloadedButtonProps with ButtonProps then all of the components that use `as` doesn't warn you if you are missing any of the button props. I might need to remove the forwardRef of a basic button and fully type the component if I want this to work properly.
export const Button = React.forwardRef<
  HTMLButtonElement,
  OverloadedButtonProps
>(({ as = "button", ...props }: OverloadedButtonProps, ref: any) =>
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
