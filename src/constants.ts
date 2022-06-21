export const APP = {
  name: "VieDiArdesia",
};

export const MAP = {
  styles: "mapbox://styles/cgiov996/ckkwaceo00fnb17p8z712nv8x",
  token: import.meta.env.VITE_MAP_TOKEN,

  initialState: {
    latitude: 44.30327431247439,
    longitude: 9.386529922485352,
    zoom: 20,
    bearing: 25,
  },
};

export const THEME = {
  primaryColor: "#556cd6",
  secondaryColor: "#34a0a4",
};
