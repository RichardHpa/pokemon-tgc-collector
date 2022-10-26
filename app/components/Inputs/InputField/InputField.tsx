import { forwardRef } from "react";

import type { InputFieldProps } from "./types";

export const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  (
    {
      className,
      disabled,
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
          htmlFor={name || label}
          className="block text-sm font-medium text-gray-700"
        >
          {label} {required && <span>*</span>}
        </label>
        <div className="mt-1">
          <input
            {...props}
            id={name || label}
            ref={ref}
            name={name || label}
            type={type}
            required={required}
            autoComplete={autoComplete}
            aria-invalid={error ? true : undefined}
            aria-describedby={`${name || label}-error`}
            className="w-full rounded border border-gray-500 px-2 py-1 text-lg"
          />
          {error && (
            <div className="pt-1 text-red-700" id={`${name || label}-error`}>
              {error}
            </div>
          )}
        </div>
      </div>
    );
  }
);

InputField.displayName = "InputField";
