import { FeatureCollection } from "@vie/types/geojson";
import { memo } from "react";
import { Layer, Source } from "react-map-gl";

type Props = {
  data: FeatureCollection;
};

export const BlankMarkers = memo(
  ({ data }: Props) => {
    return (
      <Source id="markers" type="geojson" data={data as any}>
        <Layer
          id="marker"
          source="markers"
          type="symbol"
          layout={{ "icon-image": "mountain" }}
        />
      </Source>
    );
  },
  () => true
);
