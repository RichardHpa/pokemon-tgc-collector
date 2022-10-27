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
            className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
          />
          <label
            htmlFor={name}
            className="ml-2 block cursor-pointer text-sm text-gray-900"
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
