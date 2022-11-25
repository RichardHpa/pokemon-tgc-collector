import { useEffect, useState, useCallback } from "react";
import { useLoaderData, useFetcher, Link } from "@remix-run/react";
import { json } from "@remix-run/node";

import { getExpansions } from "~/api/getExpansions";

import { ExpansionCard } from "~/components/ExpansionCard";

import type { Set } from "pokemon-tcg-sdk-typescript/dist/sdk";
import type { LoaderFunction } from "@remix-run/node";

// Pull page down from the loader's api request
const getPage = (searchParams: URLSearchParams) =>
  Number(searchParams.get("page") || "1");

type LoaderData = {
  expansions: Awaited<ReturnType<typeof getExpansions>>;
};

export const loader: LoaderFunction = async ({ request }) => {
  const page = getPage(new URL(request.url).searchParams);

  const data = await getExpansions({
    page,
    pageSize: 12,
  });

  return json<LoaderData>({
    expansions: data,
  });
};

export default function ExpansionsIndexPage() {
  const { expansions: initialExpansions } = useLoaderData<LoaderData>();
  const [expansions, setExpansions] = useState(initialExpansions);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [clientHeight, setClientHeight] = useState(0);

  const [height, setHeight] = useState(null);
  const [shouldFetch, setShouldFetch] = useState(true);

  // Start with two because 1 was pre-loaded
  const [page, setPage] = useState(2);
  const fetcher = useFetcher();

  // Set height of the parent container whenever photos are loaded
  const divHeight = useCallback(
    (node: any) => {
      if (node !== null) {
        setHeight(node.getBoundingClientRect().height);
      }
    },
    [expansions.length]
  );

  // Add Listeners to scroll and client resize
  useEffect(() => {
    const scrollListener = () => {
      setClientHeight(window.innerHeight);
      setScrollPosition(window.scrollY);
    };

    // Avoid running during SSR
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", scrollListener);
    }

    // Clean up
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", scrollListener);
      }
    };
  }, []);

  // Listen on scrolls. Fire on some self-described breakpoint
  useEffect(() => {
    if (!shouldFetch || !height) return;
    if (clientHeight + scrollPosition + 100 < height) return;
    fetcher.load(`/expansions?index&page=${page}`);

    setShouldFetch(false);
  }, [clientHeight, scrollPosition, fetcher]);

  // Merge sets, increment page, and allow fetching again
  useEffect(() => {
    // Discontinue API calls if the last page has been reached
    if (fetcher.data && fetcher.data.length === 0) {
      setShouldFetch(false);
      return;
    }

    if (fetcher.data && fetcher.data.expansions.length > 0) {
      console.log(fetcher.data.expansions);
      setExpansions((prevSets: Set[]) => [
        ...prevSets,
        ...fetcher.data.expansions,
      ]);
      setPage((page: number) => page + 1);
      setShouldFetch(true);
    }
  }, [fetcher.data]);

  return (
    <div ref={divHeight}>
      {expansions && (
        <div className="grid grid-cols-4 gap-3" role="list">
          {expansions.map((set) => {
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
    </div>
  );
}
