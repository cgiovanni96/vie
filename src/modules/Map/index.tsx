import * as MapGl from "react-map-gl";

import { MAP } from "@vie/constants";
import { Children } from "@vie/types/types";

type Props = {
  viewState: Partial<MapGl.ViewState>;
  setViewState: (viewState: Partial<MapGl.ViewState>) => void;
} & Partial<Children>;

export const Map = ({ children, viewState, setViewState }: Props) => {
  return (
    <MapGl.Map
      reuseMaps
      id="mapRef"
      style={{
        width: "100vw",
        height: "100vh",
      }}
      mapboxAccessToken={MAP.token}
      mapStyle={MAP.styles}
      initialViewState={viewState}
      onMove={(e) => {
        setViewState(e.viewState);
      }}
    >
      <MapGl.NavigationControl position="bottom-right" />
      <MapGl.GeolocateControl position="bottom-right" />

      {children}
    </MapGl.Map>
  );
};

export default Map;
