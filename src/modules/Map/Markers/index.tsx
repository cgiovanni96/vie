import { memo, useCallback, useMemo } from "react";
import * as MapGl from "react-map-gl";
import useSuperCluster from "use-supercluster";
import { Fab } from "@mui/material";
import { blueGrey } from "@mui/material/colors";

import { Mark } from "@vie/modules/Map/types";
import { formatMarksForClustering } from "../utils";
import { ClusterFeature } from "@vie/types/geojson";
import { typeToIcon } from "./icons";

type Props = {
  marks: Mark[];
  zoom?: number;
};

export const Markers = memo(
  ({ marks, zoom }: Props) => {
    const map = MapGl.useMap();

    const formattedMarks = useMemo(
      () => formatMarksForClustering(marks),
      [marks]
    );
    const bounds = useMemo(
      () => (map.current ? map.current.getBounds().toArray().flat() : null),
      [map.current]
    );

    const { clusters, supercluster } = useSuperCluster({
      points: formattedMarks,
      bounds: bounds as any,
      zoom: zoom || 13.5,
      options: { radius: 50, maxZoom: 20 },
    });

    const zoomTransition = useCallback(
      (clusterId: string) => {
        return Math.min(supercluster.getClusterExpansionZoom(clusterId), 20);
      },
      [supercluster]
    );

    return (
      <>
        {clusters.length > 0 &&
          clusters.map((cluster: ClusterFeature) => {
            const [longitude, latitude] = cluster.geometry.coordinates;

            const { cluster: isCluster, point_count: pointCount } =
              cluster.properties;

            if (isCluster) {
              return (
                <MapGl.Marker
                  key={`cluster-${cluster.id}`}
                  latitude={latitude as number}
                  longitude={longitude as number}
                  onClick={() => {
                    map.current &&
                      supercluster &&
                      map.current.easeTo({
                        center: [longitude as number, latitude as number],
                        zoom: zoomTransition(cluster.id),
                        duration: 300,
                      });
                  }}
                >
                  <Fab color="primary">{pointCount}</Fab>
                </MapGl.Marker>
              );
            }

            const MarkerIcon = typeToIcon(cluster.properties.type);
            return (
              <MapGl.Marker
                key={cluster.id}
                latitude={latitude as number}
                longitude={longitude as number}
                onClick={() => console.log("clicked", cluster.id)}
                clickTolerance={0.5}
              >
                <MarkerIcon sx={{ color: blueGrey[900] }} />
              </MapGl.Marker>
            );
          })}
      </>
    );
  },
  (prev, next) => prev.zoom === next.zoom && prev.marks === next.marks
);
