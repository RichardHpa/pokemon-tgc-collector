import { createCookieSessionStorage } from "@remix-run/node";
import invariant from "tiny-invariant";

import { isTheme } from "./theme-provider";

import type { Theme } from "./theme-provider";

invariant(process.env.SESSION_SECRET, "SESSION_SECRET must be set");

export const themeStorage = createCookieSessionStorage({
  cookie: {
    name: "__theme",
    httpOnly: true,
    path: "/",
    sameSite: "lax",
    secrets: [process.env.SESSION_SECRET],
    secure: process.env.NODE_ENV === "production",
  },
});

async function getThemeSession(request: Request) {
  const session = await themeStorage.getSession(request.headers.get("Cookie"));

  return {
    getTheme: () => {
      const themeValue = session.get("theme");
      return isTheme(themeValue) ? themeValue : null;
    },
    setTheme: (theme: Theme) => session.set("theme", theme),
    commit: () => themeStorage.commitSession(session),
  };
}

export { getThemeSession };
