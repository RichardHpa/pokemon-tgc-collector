import { forwardRef } from "react";

import type { InputFieldProps } from "./types";

export const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  (
    {
      disabled = false,
      error,
      label,
      type = "text",
      name,
      autoComplete = "off",
      required = false,
      ...props
    },
    ref
  ) => {
    return (
      <div>
        <label
          htmlFor={name}
          className="block text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          {label} {required && <span>*</span>}
        </label>
        <div className="mt-1">
          <input
            {...props}
            id={name}
            ref={ref}
            name={name}
            type={type}
            required={required}
            autoComplete={autoComplete}
            aria-invalid={error ? true : undefined}
            aria-describedby={`${name}-error`}
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-50 dark:focus:ring-blue-500"
            disabled={disabled}
          />
          {error && (
            <div className="pt-1 text-red-700" id={`${name}-error`}>
              {error}
            </div>
          )}
        </div>
      </div>
    );
  }
);

InputField.displayName = "InputField";
