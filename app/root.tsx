import clsx from "clsx";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";

import tailwindStylesheetUrl from "./styles/tailwind.css";

import { getUser } from "~/utils/session.server";
import { getThemeSession } from "./utils/theme.server";
import {
  // NonFlashOfWrongThemeEls,
  ThemeProvider,
  useTheme,
} from "~/utils/theme-provider";

import { Navbar } from "~/components/Navbar";

import type {
  LinksFunction,
  LoaderArgs,
  MetaFunction,
  LoaderFunction,
} from "@remix-run/node";
import type { Theme } from "~/utils/theme-provider";
import type { User } from "~/models/user.server";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: tailwindStylesheetUrl }];
};

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Remix Notes",
  viewport: "width=device-width,initial-scale=1",
});

export type LoaderData = {
  theme: Theme | null;
  user: User | null;
};

export const loader: LoaderFunction = async ({ request }: LoaderArgs) => {
  const themeSession = await getThemeSession(request);
  const user = await getUser(request);

  const data: LoaderData = {
    theme: themeSession.getTheme(),
    user,
  };

  return data;
};

function App() {
  const [theme] = useTheme();
  // const data = useLoaderData<LoaderData>();

  return (
    <html lang="en" className={clsx("h-full", theme)}>
      <head>
        <Meta />
        <Links />
        {/* For some reason this is causing some issues with elements like inputs */}
        {/* <NonFlashOfWrongThemeEls ssrTheme={Boolean(data.theme)} /> */}
      </head>
      <body className="flex h-full flex-col bg-white text-black dark:bg-gray-900 dark:text-gray-200">
        <Navbar />
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export default function AppWithProviders() {
  const data = useLoaderData<LoaderData>();

  return (
    <ThemeProvider specifiedTheme={data.theme}>
      <App />
    </ThemeProvider>
  );
}
