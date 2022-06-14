import * as MapGl from "react-map-gl";

import { MAP } from "@vie/constants";
import { Children } from "@vie/types/types";
import { useLayerStore } from "@vie/stores/useLayerStore";
import { PathDrawer } from "./Paths/PathDrawer";

type Props = {
  viewState: Partial<MapGl.ViewState>;
  setViewState: (viewState: Partial<MapGl.ViewState>) => void;
  interactiveIds?: string[];
} & Partial<Children>;

export const Map = ({
  children,
  viewState,
  setViewState,
  interactiveIds,
}: Props) => {
  const store = useLayerStore();

  return (
    <>
      <MapGl.Map
        reuseMaps
        id="mapRef"
        style={{
          width: "100vw",
          height: "100vh",
        }}
        cursor={store.hoveredLayer ? "pointer" : "default"}
        mapboxAccessToken={MAP.token}
        mapStyle={MAP.styles}
        initialViewState={viewState}
        onMove={(e) => {
          setViewState(e.viewState);
        }}
        interactiveLayerIds={interactiveIds && [...interactiveIds]}
        onMouseEnter={(e) => {
          store.setHoveredLayer(
            e.features ? e.features[0].layer.id : undefined
          );
        }}
        onMouseLeave={() => store.setHoveredLayer(undefined)}
        onClick={(e) => {
          const clickedLayer = e.features ? e.features[0].layer.id : undefined;

          clickedLayer &&
            clickedLayer === store.clickedLayer &&
            store.setSelectedFeature(undefined);

          clickedLayer &&
            store.setClickedLayer(
              clickedLayer !== store.clickedLayer ? clickedLayer : undefined
            );
        }}
      >
        <MapGl.NavigationControl position="bottom-right" />
        <MapGl.GeolocateControl position="bottom-right" />

        {children}
      </MapGl.Map>
    </>
  );
};

export default Map;
