import { Outlet } from "@remix-run/react";

export const loader = () => {
  console.log("_AUTH");
  return null;
};

export default function Auth() {
  return (
    <main>
      <h2>Auth</h2>
      <Outlet />
    </main>
  );
}
