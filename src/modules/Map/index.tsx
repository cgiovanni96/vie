import * as MapGl from "react-map-gl";

import { mapStyles, token } from "../../constants/map";
import { Children } from "../../types";

type Props = {
  viewState: Partial<MapGl.ViewState>;
  setViewState: (viewState: Partial<MapGl.ViewState>) => void;
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
      mapboxAccessToken={token}
      mapStyle={mapStyles}
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
