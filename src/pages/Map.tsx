import "mapbox-gl/dist/mapbox-gl.css";
import { Suspense, useEffect, useState } from "react";
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
import { Navigation } from "@vie/modules/Map/Navigation";
import { useGetInteractiveIds } from "@vie/hooks/useGetInteractiveIds";
import { Menu } from "@vie/modules/Map/Navigation/Menu";
import { FilterMenu } from "@vie/modules/Map/FilterMenu";

export const MapPage = () => {
  const [view, setView] = useState<Partial<ViewState>>(MAP.initialState);
  const [selectedMarks, setSelectedMarks] = useState<Mark[]>([]);
  const [menuVisibility, setMenuVisibility] = useState<boolean>(false);
  const [filterVisibility, setFilterVisibility] = useState<boolean>(false);

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

  const { interactiveIds } = useGetInteractiveIds(pathsQuery.data);

  return (
    <Suspense fallback={<>Loading</>}>
      <Navigation
        toggleMenuVisibility={() => setMenuVisibility(!menuVisibility)}
        toggleFilterVisibility={() => setFilterVisibility(!filterVisibility)}
      />
      <Menu visible={menuVisibility} close={() => setMenuVisibility(false)} />
      <FilterMenu
        visible={filterVisibility}
        close={() => setFilterVisibility(false)}
      />
      {marksQuery.data && (
        <Map
          viewState={view}
          setViewState={(viewState) => setView(viewState)}
          interactiveIds={interactiveIds}
        >
          <Markers marks={marksQuery.data} />
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
