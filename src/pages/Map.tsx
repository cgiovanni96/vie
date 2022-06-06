import { useState } from "react";
import { ViewState } from "react-map-gl";

import "mapbox-gl/dist/mapbox-gl.css";

import { Map } from "../modules/Map";
import { MAP } from "../constants";

export const MapPage = () => {
  const [view, setView] = useState<Partial<ViewState>>(MAP.initialState);

  return (
    <Map viewState={view} setViewState={(viewState) => setView(viewState)} />
  );
};
