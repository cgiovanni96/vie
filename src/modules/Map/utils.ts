// import { ClusterFeature, Feature } from "@vie/types/geojson";
import { Clusters } from "@vie/types/geojson";
import { Mark, Text } from "./types";

export const formatMarksForClustering = (marks: Mark[]): Clusters => {
  return marks.map((mark, i) => ({
    id: i,
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
