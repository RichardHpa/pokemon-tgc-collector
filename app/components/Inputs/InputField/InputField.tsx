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
          className="block text-sm font-medium text-gray-700"
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
            className="w-full rounded border border-gray-500 px-2 py-1 text-lg"
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