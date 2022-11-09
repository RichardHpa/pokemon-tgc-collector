import { cloneElement, useMemo } from "react";
import clsx from "clsx";
import { merge } from "lodash";

import { baseClasses } from "../baseClasses";

import type { ButtonProps } from "~/components/Button/types";

interface IconButtonProps extends Omit<ButtonProps, "children" | "full"> {
  icon: JSX.Element;
}

const iconButtonClasses = {
  base: "inline-flex align-middle justify-center rounded-full p-2",
  variant: {
    outline: {
      common: "border !p-[calc(0.5rem-1px)]",
    },
  },
};
// the first argument is the destination object, so we need it to be an empty object so that we don't mutate the original object
const mergedClasses = merge({}, baseClasses, iconButtonClasses);

export const IconButton = ({
  icon,
  color = "primary",
  className,
  variant = "solid",
  disabled,
  ...props
}: IconButtonProps) => {
  const Icon = useMemo(
    () =>
      cloneElement(icon, {
        className: "h-6 w-6 inline-block",
      }),
    [icon]
  );
  return (
    <button
      className={clsx(
        iconButtonClasses.base,
        mergedClasses.variant[variant][color],
        mergedClasses.variant[variant].common,
        { [mergedClasses.disabled]: disabled },
        className
      )}
      {...props}
    >
      {Icon}
    </button>
  );
};
