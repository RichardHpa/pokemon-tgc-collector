import { forwardRef } from "react";

import type { InputFieldProps } from "../InputField/types";

export const Checkbox = forwardRef<
  HTMLInputElement,
  Omit<InputFieldProps, "type">
>(
  (
    { disabled = false, error, label, name, required = false, ...props },
    ref
  ) => {
    return (
      <div>
        <div className="flex items-center">
          <input
            {...props}
            ref={ref}
            id={name}
            name={name}
            type="checkbox"
            disabled={disabled}
            required={required}
            aria-invalid={error ? true : undefined}
            aria-describedby={`${name}-error`}
            className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
          />
          <label
            htmlFor={name}
            className="ml-2 block cursor-pointer text-sm text-black dark:text-gray-200"
          >
            {label} {required && <span>*</span>}
          </label>
        </div>
        {error && (
          <div className="pt-1 text-red-700" id={`${name}-error`}>
            {error}
          </div>
        )}
      </div>
    );
  }
);

Checkbox.displayName = "Checkbox";
