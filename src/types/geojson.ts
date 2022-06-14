import { Mark } from "@vie/modules/Map/types";
import { Feature, FeatureCollection, LineString, Point } from "geojson";

export type ClusterProperties = {
  cluster: boolean;
  point_count?: number;
} & Mark;

export type Cluster = Feature<Point, ClusterProperties>;
export type Clusters = Cluster[];

export type FeaturePath = Feature<LineString, { path: string }>;
export type FeaturePaths = FeatureCollection<LineString, { path: string }>;
