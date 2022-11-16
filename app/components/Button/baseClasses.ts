export const baseClasses = {
  base: "inline-flex px-4 py-2 rounded justify-center items-center font-medium",
  disabled: "opacity-50 cursor-not-allowed pointer-events-none",
  full: "w-full",
  variant: {
    solid: {
      common: "text-white",
      primary: "bg-blue-500 hover:bg-blue-600 border-blue-500",
      secondary: "bg-emerald-500 hover:bg-emerald-600 border-emerald-500",
      danger: "bg-red-500 hover:bg-red-600 border-red-500",
      neutral: "bg-gray-500 hover:bg-gray-600 border-gray-500 dark:text-white",
    },
    outline: {
      common: "border py-[calc(0.5rem-1px)] px-[calc(1rem-1px)]",
      primary: "text-blue-500 hover:bg-blue-50 border-blue-500",
      secondary: "text-emerald-500 hover:bg-emerald-50 border-emerald-500",
      danger: "text-red-500 hover:bg-red-50 border-red-500",
      neutral:
        "text-gray-500 hover:bg-gray-50 border-gray-500 dark:text-gray-500",
    },
    ghost: {
      common: "border-transparent hover:bg-opacity-5",
      primary: "text-blue-500 hover:bg-blue-500 ",
      secondary: "text-emerald-500 hover:bg-emerald-500",
      danger: "text-red-500 hover:bg-red-500",
      neutral: "text-gray-500 hover:bg-gray-500 dark:text-white",
    },
    text: {
      common: "hover:underline",
      primary: "text-blue-500",
      secondary: "text-emerald-500",
      danger: "text-red-500",
      neutral: "text-gray-700 dark:text-white",
    },
  },
};
