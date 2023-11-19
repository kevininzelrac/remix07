import {
  ActionFunction,
  LoaderFunction,
  json,
  redirect,
} from "@remix-run/node";
import { Form, useActionData, useLoaderData } from "@remix-run/react";
import { ActionFunctionArgs } from "react-router";

export const loader: LoaderFunction = async ({ context }) => {
  console.log("CONTACT");
  return json(context);
};

export const action: ActionFunction = async ({
  request,
}: ActionFunctionArgs) => {
  const formData = await request.formData();
  const input = formData.get("input") as string;
  if (!input) throw redirect("/");
  return json(input);
};

export default function Contact() {
  const context = useLoaderData<typeof loader>();
  const input = useActionData<typeof action>();
  return (
    <main>
      <h2>Contact</h2>
      <Form method="post">
        <input type="hidden" name="input" value="Bravo !" />
        <button type="submit">Good</button>
      </Form>
      <Form method="post">
        <button type="submit">Bad</button>
      </Form>
      {input ? <p>{input}</p> : null}
      <hr />
      <pre>{JSON.stringify(context, null, 3)}</pre>
    </main>
  );
}
