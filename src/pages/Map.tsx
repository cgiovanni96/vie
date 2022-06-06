import "mapbox-gl/dist/mapbox-gl.css";
import { Suspense, useEffect, useState } from "react";
import { ViewState } from "react-map-gl";
import { useQuery } from "react-query";

//constants
import { MAP } from "@vie/constants";
//api
import { useGetMarks } from "@vie/api/queries/getMarks";
import { getDataset } from "@vie/api/queries/getDataset";
// module
import { Map } from "@vie/modules/Map";
import { Markers } from "@vie/modules/Map/Markers";
import { Mark, TypeEnum } from "@vie/modules/Map/types";
import { BlankMarkers } from "@vie/modules/Map/Markers/BlankMarkers";
import { BlankPaths } from "@vie/modules/Map/Paths/BlankPaths";
import { Paths } from "@vie/modules/Map/Paths";

export const MapPage = () => {
  const [view, setView] = useState<Partial<ViewState>>(MAP.initialState);
  const [selectedMarks, setSelectedMarks] = useState<Mark[]>([]);

  const marksQuery = useGetMarks();

  const pathsQuery = useQuery("paths", () => getDataset("paths"), {
    enabled: marksQuery.isSuccess,
  });

  const blankPathsQuery = useQuery(
    "blank-paths",
    () => getDataset("blankPaths"),
    { enabled: pathsQuery.isSuccess }
  );

  const blankPointsQuery = useQuery(
    "blank-points",
    () => getDataset("blankPoints"),
    { enabled: blankPathsQuery.isSuccess }
  );

  useEffect(() => {
    if (marksQuery.data && selectedMarks.length === 0) {
      const temp = marksQuery.data.filter(
        (mark) => mark.type.name != TypeEnum.resistance
      );
      setSelectedMarks(temp);
    }
  }, [marksQuery]);

  return (
    <>
      {marksQuery.data && (
        <Map viewState={view} setViewState={(viewState) => setView(viewState)}>
          <Markers marks={selectedMarks} />

          {blankPointsQuery.data && (
            <BlankMarkers data={blankPointsQuery.data} />
          )}

          {blankPathsQuery.data && <BlankPaths data={blankPathsQuery.data} />}
          {pathsQuery.data && <Paths data={pathsQuery.data} />}
        </Map>
      )}
    </>
  );
};
