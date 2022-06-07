import { memo } from "react";
import { Layer, Source } from "react-map-gl";
import { FeatureCollection } from "geojson";

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
