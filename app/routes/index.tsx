import { useLoaderData, Link } from "@remix-run/react";
import { json } from "@remix-run/node";

import { getExpansions } from "~/api/getExpansions";

import { ExpansionCard } from "~/components/ExpansionCard";

import type { LoaderFunction } from "@remix-run/node";

type LoaderData = {
  data: Awaited<ReturnType<typeof getExpansions>>;
};

export const loader: LoaderFunction = async () => {
  return json<LoaderData>({
    data: await getExpansions({ orderBy: "-releaseDate" }),
  });
};

export default function Index() {
  const data = useLoaderData<LoaderData>();
  return (
    <main className="">
      <h1 className="mb-4 text-center text-3xl font-bold text-gray-800 dark:text-white">
        Latest Pokemon TCG Sets
      </h1>
      {data?.data && (
        <div className="grid grid-cols-3 gap-3" role="list">
          {data?.data.map((set) => {
            return (
              <div
                key={set.id}
                className="flex-1 items-stretch"
                role="listitem"
              >
                <Link to={`/expansions/${set.id}`}>
                  <ExpansionCard
                    name={set.name}
                    series={set.series}
                    releaseDate={set.releaseDate}
                    image={set.images.logo}
                  />
                </Link>
              </div>
            );
          })}
        </div>
      )}
    </main>
  );
}
