import { Layer, Source } from "react-map-gl";

import { FeatureCollection } from "@vie/types/geojson";
import { memo } from "react";

type Props = {
  data: FeatureCollection;
};

export const BlankPaths = memo(
  ({ data }: Props) => {
    return (
      <Source id="blank-paths" type="geojson" data={data as any}>
        <Layer
          id="blank-path"
          type="line"
          paint={{ "line-color": "rgba(0,0,0,0.6)" }}
        />
      </Source>
    );
  },
  () => true
);
