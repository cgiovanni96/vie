import { Suspense, useState } from "react";
import { ViewState } from "react-map-gl";

import "mapbox-gl/dist/mapbox-gl.css";

import { Map } from "../modules/Map";
import { MAP } from "../constants";
import { useGetMarks } from "../api/queries/getMarks";

export const MapPage = () => {
  const [view, setView] = useState<Partial<ViewState>>(MAP.initialState);
  const query = useGetMarks();

  return (
    <Suspense fallback={<>Loading</>}>
      {query.data && (
        <Map
          viewState={view}
          setViewState={(viewState) => setView(viewState)}
          marks={query.data}
        />
      )}
    </Suspense>
  );
};
