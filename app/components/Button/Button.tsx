import React from "react";
import clsx from "clsx";

import { baseClasses } from "./baseClasses";

import type { ButtonProps } from "./types";

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      color = "primary",
      className,
      variant = "solid",
      disabled,
      onClick,
      full = false,
      ...props
    },
    ref
  ) => {
    return (
      <button
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

Button.displayName = "Button";
