import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

import { IconButton } from "~/components/Button/IconButton";
import { Theme, useTheme } from "~/utils/theme-provider";

export const ThemeToggle = () => {
  const [theme, setTheme] = useTheme();

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT
    );
  };

  return (
    <IconButton
      variant="outline"
      color="neutral"
      icon={theme === Theme.LIGHT ? <MoonIcon /> : <SunIcon />}
      onClick={toggleTheme}
    />
  );
};
