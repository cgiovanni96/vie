import * as MapGl from "react-map-gl";

import { MAP } from "../../constants";
import { Children } from "../../types";
import { Mark } from "./types";

type Props = {
  viewState: Partial<MapGl.ViewState>;
  setViewState: (viewState: Partial<MapGl.ViewState>) => void;
  marks: Mark[];
} & Partial<Children>;

export const Map = ({ children, viewState }: Props) => {
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
      // interactiveLayerIds={[...interactiveIds]}
    >
      <MapGl.NavigationControl position="bottom-right" />
      <MapGl.GeolocateControl position="bottom-right" />

      {children}
    </MapGl.Map>
  );
};

export default Map;
