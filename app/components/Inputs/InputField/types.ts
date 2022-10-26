type inputTypes = "text" | "email" | "password" | "number" | "tel" | "url";

export type InputFieldProps = {
  className?: string;
  disabled?: boolean;
  error?: string | null;
  label: string;
  type?: inputTypes;
  autoComplete?: string;
} & React.ComponentPropsWithoutRef<"input">;
