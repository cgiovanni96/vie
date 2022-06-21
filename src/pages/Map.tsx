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
//store
import { useMarksStore } from "@vie/stores/useMarksStore";
// module
import { Map } from "@vie/modules/Map";
import { Markers } from "@vie/modules/Map/Markers";
import { BlankMarkers } from "@vie/modules/Map/Markers/BlankMarkers";
import { BlankPaths } from "@vie/modules/Map/Paths/BlankPaths";
import { Paths } from "@vie/modules/Map/Paths";
import { Navigation } from "@vie/modules/Map/Navigation";
import { useGetInteractiveIds } from "@vie/hooks/useGetInteractiveIds";
import { Menu } from "@vie/components/Menu";
import { FilterMenu } from "@vie/modules/Map/FilterMenu";
import { PathDrawer } from "@vie/modules/Map/Paths/PathDrawer";
import { useLayerStore } from "@vie/stores/useLayerStore";
import { Box, CircularProgress } from "@mui/material";

export const MapPage = () => {
  const [view, setView] = useState<Partial<ViewState>>(MAP.initialState);
  const [menuVisibility, setMenuVisibility] = useState<boolean>(false);
  const [filterVisibility, setFilterVisibility] = useState<boolean>(false);

  const layerStore = useLayerStore();
  const marksStore = useMarksStore();
  const marksQuery = useGetMarks();

  useEffect(() => {
    if (marksQuery.data && marksStore.isEmpty())
      marksStore.setMarks(marksQuery.data);
  }, [marksQuery]);

  const pathsQuery = usePathsQuery(marksQuery.isSuccess);
  const blankPointsQuery = useBlankPointsQuery(pathsQuery.isSuccess);
  const blankPathsQuery = useBlankPathsQuery(blankPointsQuery.isSuccess);

  const { interactiveIds } = useGetInteractiveIds(pathsQuery.data);

  return (
    <>
      <Navigation
        toggleMenuVisibility={() => setMenuVisibility(!menuVisibility)}
        toggleFilterVisibility={() => setFilterVisibility(!filterVisibility)}
      />
      <Menu
        visible={menuVisibility}
        close={() => setMenuVisibility(false)}
        type="navigation"
      />
      <FilterMenu
        visible={filterVisibility}
        close={() => setFilterVisibility(false)}
      />
      <PathDrawer
        featurePath={layerStore.selectedFeature}
        close={() => {
          layerStore.setSelectedFeature(undefined);
          layerStore.setClickedLayer(undefined);
        }}
      />
      {marksQuery.data ? (
        <Map
          viewState={view}
          setViewState={(viewState) => setView(viewState)}
          interactiveIds={interactiveIds}
        >
          <Markers marks={marksStore.filteredMarks} zoom={view.zoom} />
          {pathsQuery.data && <Paths data={pathsQuery.data} />}

          {blankPointsQuery.data && (
            <BlankMarkers data={blankPointsQuery.data} />
          )}

          {blankPathsQuery.data && <BlankPaths data={blankPathsQuery.data} />}
        </Map>
      ) : (
        <Box
          sx={{
            width: "100vw",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress size={80} />
        </Box>
      )}
    </>
  );
};
