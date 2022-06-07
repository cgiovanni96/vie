import "mapbox-gl/dist/mapbox-gl.css";
import { Suspense, useCallback, useEffect, useState } from "react";
import { ViewState } from "react-map-gl";

//constants
import { MAP } from "@vie/constants";
//api
import { useGetMarks } from "@vie/api/queries/getMarks";
import {
  useBlankPathsQuery,
  useBlankPointsQuery,
  usePathsQuery,
} from "@vie/api/queries/getDataset";
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

  useEffect(() => {
    if (marksQuery.data && selectedMarks.length === 0) {
      const temp = marksQuery.data.filter(
        (mark) => mark.type.name != TypeEnum.resistance
      );
      setSelectedMarks(temp);
    }
  }, [marksQuery]);

  const pathsQuery = usePathsQuery(marksQuery.isSuccess);
  const blankPointsQuery = useBlankPointsQuery(pathsQuery.isSuccess);
  const blankPathsQuery = useBlankPathsQuery(blankPointsQuery.isSuccess);

  const updateView = useCallback(
    (longitude: number, latitude: number, zoom: number) => {
      setView({ ...view, longitude, latitude, zoom });
    },
    []
  );

  return (
    <Suspense fallback={<>Loading</>}>
      {marksQuery.data && (
        <Map viewState={view} setViewState={(viewState) => setView(viewState)}>
          <Markers
            marks={marksQuery.data}
            zoom={view.zoom}
            updateView={updateView}
          />
          {pathsQuery.data && <Paths data={pathsQuery.data} />}

          {blankPointsQuery.data && (
            <BlankMarkers data={blankPointsQuery.data} />
          )}

          {blankPathsQuery.data && <BlankPaths data={blankPathsQuery.data} />}
        </Map>
      )}
    </Suspense>
  );
};
