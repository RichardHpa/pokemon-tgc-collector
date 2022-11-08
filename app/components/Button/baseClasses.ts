export const baseClasses = {
  base: "inline-flex px-4 py-2 rounded justify-center items-center font-medium",
  disabled: "opacity-50 cursor-not-allowed pointer-events-none",
  full: "w-full",
  variant: {
    solid: {
      primary: "bg-blue-500 text-white hover:bg-blue-600 border-blue-500",
      secondary:
        "bg-emerald-500 text-white hover:bg-emerald-600 border-emerald-500",
      danger: "bg-red-500 text-white hover:bg-red-600 border-red-500",
      neutral: "bg-gray-500 text-white hover:bg-gray-600 border-gray-500",
    },
    outline: {
      primary:
        "text-blue-500 hover:bg-blue-50 border-blue-500 border py-[calc(0.5rem-1px)]",
      secondary:
        "text-emerald-500 hover:bg-emerald-50 border-emerald-500 border py-[calc(0.5rem-1px)]",
      danger:
        "text-red-500 hover:bg-red-50 border-red-500 border py-[calc(0.5rem-1px)]",
      neutral:
        "text-gray-500 hover:bg-gray-50 border-gray-500 border py-[calc(0.5rem-1px)]",
    },
    ghost: {
      primary:
        "text-blue-500 hover:bg-blue-500 border-transparent hover:bg-opacity-5",
      secondary:
        "text-emerald-500 hover:bg-emerald-500 border-transparent hover:bg-opacity-5",
      danger:
        "text-red-500 hover:bg-red-500 border-transparent hover:bg-opacity-5",
      neutral:
        "text-gray-500 hover:bg-gray-500 border-transparent hover:bg-opacity-5",
    },
    text: {
      primary: "text-blue-500 hover:underline",
      secondary: "text-emerald-500 hover:underline",
      danger: "text-red-500 hover:underline",
      neutral: "text-gray-700 hover:underline",
    },
  },
};
