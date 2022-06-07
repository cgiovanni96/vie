import { Feature } from "@vie/types/geojson";
import { Mark } from "./types";

export const formatMarksForClustering = (marks: Mark[]): Feature[] => {
  return marks.map((mark) => ({
    id: mark.name,
    type: "Feature",
    properties: { cluster: false, crimeId: mark.name, type: mark.type.name },
    geometry: {
      type: "Point",
      coordinates: [mark.position.longitude, mark.position.latitude],
    },
  }));
};
