import { memo, useCallback, useMemo, useState } from "react";
import * as MapGl from "react-map-gl";
import { BBox } from "geojson";
import useSupercluster from "use-supercluster";
import { blueGrey, green } from "@mui/material/colors";
import { Box } from "@mui/material";

import { Mark } from "@vie/modules/Map/types";

import { formatMarksForClustering } from "../utils";
import { typeToIcon } from "../icons";
import { InfoDrawer } from "./InfoDrawer";
import { useLayerStore } from "@vie/stores/useLayerStore";

type Props = {
  marks: Mark[];
  zoom?: number;
};

export const Markers = memo(
  ({ marks, zoom }: Props) => {
    const [selectedMark, setSelectedMark] = useState<Mark>();
    const map = MapGl.useMap();
    const { selectedFeature, setSelectedFeature } = useLayerStore();

    const formattedMarks = useMemo(
      () => formatMarksForClustering(marks),
      [marks]
    );
    const bounds = useMemo(() => {
      return map.current
        ? map.current.getMap().getBounds().toArray().flat()
        : null;
    }, [map, zoom]);

    const { clusters, supercluster } = useSupercluster({
      points: formattedMarks,
      bounds: bounds as BBox,
      zoom: zoom || 13.5,
      options: { radius: 75, maxZoom: 20 },
    });

    const expansionZoom = useCallback(
      (id: number) =>
        supercluster
          ? Math.min(supercluster?.getClusterExpansionZoom(id), 20)
          : zoom,
      [supercluster]
    );

    return (
      <>
        <InfoDrawer
          mark={selectedMark}
          clearMark={() => setSelectedMark(undefined)}
        />
        {clusters.length > 0 &&
          clusters.map((cluster) => {
            const [longitude, latitude] = cluster.geometry.coordinates;

            const { cluster: isCluster, point_count: pointCount } =
              cluster.properties;

            if (isCluster) {
              return (
                <MapGl.Marker
                  key={`cluster-${cluster.id}`}
                  latitude={latitude}
                  longitude={longitude}
                  onClick={() => {
                    map.current &&
                      map.current.easeTo({
                        center: [longitude, latitude],
                        zoom: expansionZoom(cluster.id as number),
                        duration: 300,
                      });
                  }}
                >
                  <ClusterMark
                    pointCount={pointCount}
                    total={formattedMarks.length}
                  />
                </MapGl.Marker>
              );
            }

            const MarkerIcon = typeToIcon(cluster.properties.type.name);
            return (
              <MapGl.Marker
                key={cluster.id}
                latitude={latitude as number}
                longitude={longitude as number}
                onClick={() => {
                  setSelectedMark(cluster.properties as Mark);
                  selectedFeature && setSelectedFeature(undefined);
                }}
                clickTolerance={0.5}
              >
                <MarkerIcon sx={{ color: blueGrey[900] }} />
              </MapGl.Marker>
            );
          })}
      </>
    );
  },
  (prev, next) => prev.marks === next.marks && prev.zoom === next.zoom
);

const ClusterMark = ({
  pointCount,
  total,
}: {
  pointCount?: number;
  total: number;
}) => {
  const getColor = () => {
    const color = green;
    if (!pointCount) return color[50];
    if (pointCount < 5) return color[300];
    if (pointCount < 10) return color[400];
    if (pointCount < 20) return color[500];
    return color[700];
  };

  return (
    <Box
      sx={{
        width: `${25 + (pointCount! / total) * 100}px`,
        height: `${25 + (pointCount! / total) * 100}px`,
        borderRadius: "100%",
        background: getColor(),
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {pointCount}
    </Box>
  );
};
