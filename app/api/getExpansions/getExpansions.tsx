import { PokemonTCG } from "pokemon-tcg-sdk-typescript";

export interface getExpansionsProps {
  pageSize?: number;
  orderBy?: string;
  page?: number;
}

export const getExpansions = async ({
  pageSize = 3,
  orderBy = "",
  page = 1,
}: getExpansionsProps) => {
  const sets = PokemonTCG.findSetsByQueries({
    pageSize,
    orderBy,
    page,
  }).then((res) => res);

  return sets;
};
