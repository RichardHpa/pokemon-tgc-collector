import { Button } from "~/components/Button";

import { Theme, useTheme } from "~/utils/theme-provider";

export default function Index() {
  const [, setTheme] = useTheme();

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT
    );
  };
  return (
    <main className="relative min-h-screen sm:flex sm:items-center sm:justify-center">
      Home Page
      <Button onClick={toggleTheme}>Toggle</Button>
    </main>
  );
}
