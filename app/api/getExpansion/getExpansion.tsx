import { PokemonTCG } from "pokemon-tcg-sdk-typescript";

export const getExpansion = async (setId: string) => {
  const sets = PokemonTCG.findSetByID(setId).then((res) => res);

  return sets;
};
