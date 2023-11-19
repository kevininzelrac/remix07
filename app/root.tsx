import type { LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  NavLink,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import root from "./styles/root.css";
import spinner from "./styles/spinner.css";

export let links: LinksFunction = () => [
  { rel: "stylesheet", href: root },
  { rel: "stylesheet", href: spinner },
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <header>
          <h1>Remix 07</h1>
          <p>v1.0.0</p>
        </header>
        <nav>
          <NavLink to="/" prefetch="intent">
            HOME
          </NavLink>
          <NavLink to="Blog" prefetch="intent">
            BLOG
          </NavLink>
          <NavLink to="Contact" prefetch="intent">
            CONTACT
          </NavLink>
          <NavLink to="signin" prefetch="intent">
            SIGNIN
          </NavLink>
          <NavLink to="portfolio" prefetch="intent">
            PORTFOLIO
          </NavLink>
        </nav>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
