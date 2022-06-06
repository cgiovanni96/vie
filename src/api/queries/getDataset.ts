import { FeatureCollection } from "@vie/types/geojson";

import { MAP } from "@vie/constants";

const url = (dataset: string) =>
  `https://api.mapbox.com/datasets/v1/cgiov996/${dataset}/features?access_token=${MAP.token}`;

export type DatasetTypes = "paths" | "blankPoints" | "blankPaths";

const URLS: Record<DatasetTypes, string> = {
  paths: "cl13m4ah301ik21ls19jpock9",
  blankPoints: "cl16dhpjc00g627nvo80cqdyp",
  blankPaths: "cl17q96a60lgw22oofnwdsvwn",
};

export const getDataset = async (
  type: DatasetTypes
): Promise<FeatureCollection | null> => {
  try {
    const data: FeatureCollection = await (await fetch(url(URLS[type]))).json();
    return data;
  } catch {
    return null;
  }
};
