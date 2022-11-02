export const baseClasses = {
  base: "inline-flex px-4 py-2 rounded justify-center items-center",
  disabled: "opacity-50 cursor-not-allowed pointer-events-none",
  full: "w-full",
  variant: {
    solid: {
      primary: "bg-blue-500 text-white hover:bg-blue-600 border-blue-500",
      secondary:
        "bg-emerald-500 text-white hover:bg-emerald-600 border-emerald-500",
      danger: "bg-red-500 text-white hover:bg-red-600 border-red-500",
      inherit:
        "bg-inherit-500 text-white hover:bg-inherit-600 border-inherit-500",
    },
    outline: {
      primary:
        "box-border text-blue-500 hover:bg-blue-500 hover:text-white border-blue-500 border py-[calc(0.5rem-1px)]",
      secondary:
        "text-emerald-500 hover:bg-emerald-500 hover:text-white border-emerald-500 border py-[calc(0.5rem-1px)]",
      danger:
        "text-red-500 hover:bg-red-500 hover:text-white border-red-500 border py-[calc(0.5rem-1px)]",
      inherit:
        "text-inherit-500 hover:bg-inherit-500 hover:text-white border-inherit-500 border py-[calc(0.5rem-1px)]",
    },
    ghost: {
      primary:
        "text-blue-500 hover:bg-blue-500 hover:text-white border-transparent hover:bg-opacity-25",
      secondary:
        "text-emerald-500 hover:bg-emerald-500 hover:text-white border-transparent hover:bg-opacity-25",
      danger:
        "text-red-500 hover:bg-red-500 hover:text-white border-transparent hover:bg-opacity-25",
      inherit:
        "text-inherit-500 hover:bg-inherit-500 hover:text-inherit-500 border-transparent hover:bg-opacity-25",
    },
  },
};
