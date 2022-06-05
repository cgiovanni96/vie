import { ViewState } from "react-map-gl";

export const mapStyles = "mapbox://styles/cgiov996/ckkwaceo00fnb17p8z712nv8x";
export const token = import.meta.env.VITE_MAP_TOKEN;

export const getInitialState = (): Partial<ViewState> => ({
  latitude: 44.30327431247439,
  longitude: 9.386529922485352,
  zoom: 13.5,
  bearing: 25,
});
