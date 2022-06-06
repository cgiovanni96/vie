import "mapbox-gl/dist/mapbox-gl.css";
import { Suspense, useEffect, useState } from "react";
import { ViewState } from "react-map-gl";

//constants
import { MAP } from "@vie/constants";
//api
import { useGetMarks } from "@vie/api/queries/getMarks";
// module
import { Map } from "@vie/modules/Map";
import { Markers } from "@vie/modules/Map/Markers";
import { Mark, TypeEnum } from "@vie/modules/Map/types";

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
