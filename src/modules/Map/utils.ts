import { ClusterFeature, Feature } from "@vie/types/geojson";
import { Mark, Text } from "./types";

export const formatMarksForClustering = (marks: Mark[]): ClusterFeature[] => {
  return marks.map((mark) => ({
    id: mark.name,
    type: "Feature",
    properties: { cluster: false, ...mark },
    geometry: {
      type: "Point",
      coordinates: [mark.position.longitude, mark.position.latitude],
    },
  }));
};

export const getText = (text: Text, language: "it" | "eng") => {
  return text[language];
};
