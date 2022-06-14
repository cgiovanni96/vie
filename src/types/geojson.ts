import { Mark } from "@vie/modules/Map/types";
import { Feature, Point } from "geojson";

export type ClusterProperties = {
  cluster: boolean;
  point_count?: number;
} & Mark;

export type Cluster = Feature<Point, ClusterProperties>;
export type Clusters = Cluster[];
