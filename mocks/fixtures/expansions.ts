import { Legality } from "pokemon-tcg-sdk-typescript/dist/sdk";
import type { Set } from "pokemon-tcg-sdk-typescript/dist/sdk";

const legal = Legality.Legal;

export const expansions: Set[] = [
  {
    id: "swsh11",
    name: "Lost Origin",
    series: "Sword & Shield",
    printedTotal: 196,
    total: 217,
    legalities: {
      unlimited: legal,
      standard: legal,
      expanded: legal,
    },
    ptcgoCode: "LOR",
    releaseDate: "2022/09/09",
    updatedAt: "2022/09/09 13:45:00",
    images: {
      symbol: "https://images.pokemontcg.io/swsh11/symbol.png",
      logo: "https://images.pokemontcg.io/swsh11/logo.png",
    },
  },
  {
    id: "pgo",
    name: "Pokémon GO",
    series: "Sword & Shield",
    printedTotal: 78,
    total: 88,
    legalities: {
      unlimited: legal,
      standard: legal,
      expanded: legal,
    },
    ptcgoCode: "PGO",
    releaseDate: "2022/07/01",
    updatedAt: "2022/07/06 17:07:00",
    images: {
      symbol: "https://images.pokemontcg.io/pgo/symbol.png",
      logo: "https://images.pokemontcg.io/pgo/logo.png",
    },
  },
  {
    id: "swsh10tg",
    name: "Astral Radiance Trainer Gallery",
    series: "Sword & Shield",
    printedTotal: 30,
    total: 30,
    legalities: {
      unlimited: legal,
      standard: legal,
      expanded: legal,
    },
    ptcgoCode: "ASR",
    releaseDate: "2022/05/27",
    updatedAt: "2022/05/27 09:45:00",
    images: {
      symbol: "https://images.pokemontcg.io/swsh10tg/symbol.png",
      logo: "https://images.pokemontcg.io/swsh10tg/logo.png",
    },
  },
];

export const expansion = expansions[0];
