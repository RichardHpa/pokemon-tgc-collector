import type { ActionArgs, LoaderArgs } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import invariant from "tiny-invariant";

import { getExpansion } from "~/api/getExpansion";

type LoaderData = {
  expansion: Awaited<ReturnType<typeof getExpansion>>;
};

export async function loader({ params }: LoaderArgs) {
  invariant(params.expansionId, "expansionId not found");

  const data = await getExpansion(params.expansionId);

  return json<LoaderData>({
    expansion: data,
  });
}

export default function ExpansionDetailsPage() {
  const { expansion } = useLoaderData<typeof loader>();
  console.log(expansion);
  return (
    <div className="grid grid-flow-row-dense grid-cols-3 gap-4">
      <img src={expansion.images.logo} alt={`${expansion.name} logo`} />

      <div className="col-span-2">
        <h3 className="mb-2 text-2xl font-bold">
          {expansion.name} {expansion.ptcgoCode && `(${expansion.ptcgoCode})`}
        </h3>
        {expansion.series && (
          <p className="mb-2 font-bold">{expansion.series}</p>
        )}
        {expansion.releaseDate && (
          <p className="mb-2 font-bold">released {expansion.releaseDate}</p>
        )}

        <img
          className="w-12"
          src={expansion.images.symbol}
          alt={`${expansion.name} symbol`}
        />
      </div>
    </div>
  );
}
