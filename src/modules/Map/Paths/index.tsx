import { Source, Layer } from "react-map-gl";

import { memo, useCallback, useEffect } from "react";
import { THEME } from "@vie/constants";
import { useLayerStore } from "@vie/stores/useLayerStore";
import { FeaturePaths } from "@vie/types/geojson";
// import { useLayerStore } from "@store/useLayerStore";

type Props = {
  data: FeaturePaths;
};

export const Paths = memo(
  ({ data }: Props) => {
    const { hoveredLayer, clickedLayer, setSelectedFeature } = useLayerStore();

    const isBefore = useCallback(
      (featureId: string) => {
        if (hoveredLayer && hoveredLayer !== featureId) return hoveredLayer;
        if (clickedLayer && clickedLayer !== featureId) return clickedLayer;
        return undefined;
      },
      [hoveredLayer, clickedLayer]
    );

    useEffect(() => {
      const layer = data.features.find((f) => f.id === clickedLayer);
      if (!layer) return;
      setSelectedFeature(layer);
    }, [clickedLayer]);

    return (
      <>
        {data.features.map((feature) => (
          <Source
            key={feature.id}
            id={feature.id as string}
            type="geojson"
            data={feature.geometry as any}
          >
            <Layer
              id={feature.id as string}
              type="line"
              beforeId={isBefore(feature.id as string)}
              paint={{
                "line-width": clickedLayer === feature.id ? 6 : 4,
                "line-color":
                  clickedLayer === feature.id || hoveredLayer === feature.id
                    ? THEME.primaryColor
                    : THEME.secondaryColor,
              }}
            />
          </Source>
        ))}
      </>
    );
  },
  (prev, next) => true
);
