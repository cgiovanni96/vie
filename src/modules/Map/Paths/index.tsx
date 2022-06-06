import { Source, Layer } from "react-map-gl";

import { FeatureCollection } from "@vie/types/geojson";
// import { useLayerStore } from "@store/useLayerStore";
// import { PRIMARY_COLOR, SECONDARY_COLOR } from "@utils/config/theme";

type Props = {
  data: FeatureCollection;
};

export const Paths = ({ data }: Props) => {
  //   const { hoveredLayer, clickedLayer, setSelectedFeature } = useLayerStore();

  //   const isBefore = useCallback(
  //     (featureId) => {
  //       if (hoveredLayer && hoveredLayer !== featureId) return hoveredLayer;
  //       if (clickedLayer && clickedLayer !== featureId) return clickedLayer;
  //       return undefined;
  //     },
  //     [hoveredLayer, clickedLayer]
  //   );

  //   useEffect(() => {
  //     if (clickedLayer === feature.id) setSelectedFeature(feature);
  //   }, [clickedLayer]);

  return (
    <>
      {data.features.map((feature) => (
        <Source
          key={feature.id}
          id={feature.id}
          type="geojson"
          data={feature.geometry as any}
        >
          <Layer
            id={feature.id}
            type="line"
            // beforeId={isBefore(feature.id)}
            paint={{
              "line-width": 4,
              "line-color": "#000",
            }}
          />
        </Source>
      ))}
    </>
  );
};
