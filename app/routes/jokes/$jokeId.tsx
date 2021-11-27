import { Joke } from ".prisma/client";
import { Link, LoaderFunction, useLoaderData } from "remix";

import { db } from "~/utils/db.server";

type LoaderData = { joke: Joke | null };

export const loader: LoaderFunction = async ({ params }) => {
  const { jokeId } = params;
  const data: LoaderData = {
    joke: await db.joke.findUnique({
      where: { id: jokeId },
    }),
  };

  return data;
};

export default function ParamJoke() {
  const data = useLoaderData();

  return (
    <div>
      <p>Here's your hilarious joke:</p>
      <p>{data.joke.content}</p>
      <Link to=".">{data.joke.name} Permalink</Link>
    </div>
  );
}
