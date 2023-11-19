import { LoaderFunction } from "@remix-run/node";
import ErrorBoundary from "../errorBoundary";
export { ErrorBoundary };

export const loader: LoaderFunction = async () => {
  console.log("HOME");
  return null;
};

export default function Index() {
  return (
    <main>
      <h2>HOME</h2>
    </main>
  );
}
