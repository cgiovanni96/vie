import * as MapGL from "react-map-gl";

import { mapStyles, token } from "../../constants/map";
import { Children } from "../../types";

type Props = {
  viewState: Partial<MapGL.ViewState>;
  setViewState: (viewState: Partial<MapGL.ViewState>) => void;
} & Partial<Children>;

export const Map = ({ children, viewState }: Props) => {
  console.log("MAPPA", token);

  return (
    <MapGL.Map
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
      <MapGL.NavigationControl position="bottom-right" />
      <MapGL.GeolocateControl position="bottom-right" />

      {children}
    </MapGL.Map>
  );
};

export default Map;
