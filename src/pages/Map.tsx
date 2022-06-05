import { useState } from "react";
import { ViewState } from "react-map-gl";

import { Map } from "../modules/Map";
import { getInitialState } from "../constants/map";

export const MapPage = () => {
  const [view, setView] = useState<Partial<ViewState>>(getInitialState());
  console.log("MAP PAGE");

  return (
    <Map viewState={view} setViewState={(viewState) => setView(viewState)} />
  );
};
