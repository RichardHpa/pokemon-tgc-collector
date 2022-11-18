import { useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/node";

import { getExpansions } from "~/api/getExpansions";

import { ExpansionCard } from "~/components/ExpansionCard";

import type { LoaderFunction } from "@remix-run/node";

type LoaderData = {
  data: Awaited<ReturnType<typeof getExpansions>>;
};

export const loader: LoaderFunction = async () => {
  return json<LoaderData>({
    data: await getExpansions({ orderBy: "releaseDate", pageSize: 12 }),
  });
};

export default function ExpansionsIndexPage() {
  const data = useLoaderData<LoaderData>();

  return (
    <div>
      {data?.data && (
        <div className="grid grid-cols-4 gap-3" role="list">
          {data?.data.map((set) => {
            return (
              <div
                key={set.id}
                className="flex-1 items-stretch"
                role="listitem"
              >
                <ExpansionCard
                  name={set.name}
                  series={set.series}
                  releaseDate={set.releaseDate}
                  image={set.images.logo}
                />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
