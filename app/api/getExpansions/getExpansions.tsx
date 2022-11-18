import { PokemonTCG } from "pokemon-tcg-sdk-typescript";

export interface getExpansionsProps {
  pageSize?: number;
  orderBy?: string;
}

export const getExpansions = async ({
  pageSize = 3,
  orderBy = "",
}: getExpansionsProps) => {
  const sets = PokemonTCG.findSetsByQueries({
    pageSize,
    orderBy,
  }).then((res) => res);

  return sets;
};

// -releaseDate;
