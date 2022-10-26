type inputTypes = "text" | "email" | "password" | "number" | "tel" | "url";

export type InputFieldProps = {
  className?: string;
  error?: string | null;
  label: string;
  type?: inputTypes;
  name: string;
} & React.ComponentPropsWithoutRef<"input">;
