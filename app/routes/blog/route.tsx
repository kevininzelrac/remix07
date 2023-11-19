import {
  defer,
  LinksFunction,
  type LoaderFunction,
  type MetaFunction,
} from "@remix-run/node";
import { Await, useLoaderData } from "@remix-run/react";
import { Suspense } from "react";
//import { deferredData01 } from "./deferredData01.server";
//import { deferredData02 } from "./deferredData02.server";
import ErrorElement from "../errorElement";

import styles from "./styles.css";
export let links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];

const deferredQuery01 = async (): Promise<{ data: string }> => {
  const { deferredData01 } = await import("./deferredData01");
  await new Promise<void>((resolve) => setTimeout(resolve, 500));
  return {
    data: deferredData01,
  };
};

const deferredQuery02 = async (): Promise<{ data: string }> => {
  const { deferredData02 } = await import("./deferredData02");
  await new Promise<void>((resolve) => setTimeout(resolve, 1000));
  return {
    data: deferredData02,
  };
};

export const loader: LoaderFunction = async () => {
  console.log("BLOG");
  return defer({
    deferred01: deferredQuery01(),
    deferred02: deferredQuery02(),
  });
};

export default function Index() {
  const { deferred01, deferred02 } = useLoaderData<typeof loader>();

  return (
    <main>
      <h2>BLOG</h2>
      <p>Static Data waiting for company</p>
      <Suspense fallback={<div className="spinner">Defered Data 01 ...</div>}>
        <Await resolve={deferred01} errorElement={<ErrorElement />}>
          {({ data }) => <p>{data}</p>}
        </Await>
      </Suspense>

      <Suspense fallback={<div className="spinner">Defered Data 02 ...</div>}>
        <Await resolve={deferred02} errorElement={<ErrorElement />}>
          {({ data }) => <p>{data}</p>}
        </Await>
      </Suspense>
    </main>
  );
}
