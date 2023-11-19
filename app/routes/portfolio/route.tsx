import { LoaderFunction, redirect } from "@remix-run/node";

import ErrorBoundary from "../errorBoundary";
export { ErrorBoundary };

export const loader: LoaderFunction = async () => {
  console.log("_PORTFOLIO");
  return redirect("/signin");
  //return json("test");
  //return new Response(null, {
  //  status: 204,
  //  headers: {
  //    "x-remix-redirect": "/signin",
  //    "x-remix-status": "302",
  //    //Location: "/signin",
  //  },
  //});
};

export default function Portfolio() {
  return (
    <main>
      <h2>Portfolio</h2>
    </main>
  );
}
