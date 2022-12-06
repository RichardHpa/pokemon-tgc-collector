import type { Set } from "pokemon-tcg-sdk-typescript/dist/sdk";

export interface ExpansionCardProps
  extends Pick<Set, "name" | "series" | "releaseDate"> {
  image: string;
}
