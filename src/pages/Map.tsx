import { useState } from "react";
import { ViewState } from "react-map-gl";

import "mapbox-gl/dist/mapbox-gl.css";

import { Map } from "../modules/Map";
import { getInitialState } from "../constants/map";

export const MapPage = () => {
  const [view, setView] = useState<Partial<ViewState>>(getInitialState());

  return (
    <Map viewState={view} setViewState={(viewState) => setView(viewState)} />
  );
};
