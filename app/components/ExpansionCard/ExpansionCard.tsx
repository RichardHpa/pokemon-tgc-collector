import { Card } from "~/components/Card";

import type { ExpansionCardProps } from "./types";

export const ExpansionCard = ({
  image,
  name,
  series,
  releaseDate,
}: ExpansionCardProps) => {
  return (
    <Card>
      <div className="flex h-full flex-col">
        <div className="mb-4 flex justify-center">
          <img className="max-h-28 w-auto" src={image} alt={`${name} logo`} />
        </div>

        <div className="mt-auto">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {name}
          </h5>

          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {series} - {releaseDate}
          </p>
        </div>
      </div>
    </Card>
  );
};
