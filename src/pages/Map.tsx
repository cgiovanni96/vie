import { Suspense, useEffect, useState } from "react";
import { ViewState } from "react-map-gl";

import "mapbox-gl/dist/mapbox-gl.css";

import { Map } from "../modules/Map";
import { MAP } from "../constants";
import { useGetMarks } from "../api/queries/getMarks";
import { Markers } from "../modules/Map/Markers";
import { Mark, TypeEnum } from "../modules/Map/types";

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

  return (
    <Suspense fallback={<>Loading</>}>
      {marksQuery.data && (
        <Map viewState={view} setViewState={(viewState) => setView(viewState)}>
          <Markers marks={selectedMarks} />
        </Map>
      )}
    </Suspense>
  );
};
