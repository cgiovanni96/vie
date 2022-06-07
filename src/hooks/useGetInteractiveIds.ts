import { FeatureCollection } from "geojson";
import { useEffect, useState } from "react";

export const useGetInteractiveIds = (data?: FeatureCollection) => {
  const [interactiveIds, setInteractiveIds] = useState<string[]>();

  useEffect(() => {
    if (!data) {
      setInteractiveIds(undefined);
      return;
    }

    const ids = data.features.map((feature) => feature.id as string);
    setInteractiveIds(ids);
  }, [data]);

  return { interactiveIds };
};
