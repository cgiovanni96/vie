import { Mark, TypeEnum } from "@vie/modules/Map/types";

export type Geometry =
  | Point
  | MultiPoint
  | LineString
  | MultiLineString
  | Polygon
  | MultiPolygon;
export type GeometryType = Geometry["type"];
export type GeoJson = Geometry | Feature | FeatureCollection;
export type GeoJsonType = GeoJson["type"];

export type Position = [
  latitude: number,
  longitude: number,
  elevation?: number
];

export type Record = { [key in string | number]: unknown };

export interface GeometryBase extends Record {
  bbox?: number[];
}

export interface Point extends GeometryBase {
  type: "Point";
  coordinates: Position;
}

export interface MultiPoint extends GeometryBase {
  type: "MultiPoint";
  coordinates: Position[];
}

export interface LineString extends GeometryBase {
  type: "LineString";
  coordinates: { 0: Position; 1: Position } & Position[];
}

export interface MultiLineString extends GeometryBase {
  type: "MultiLineString";
  coordinates: LineString["coordinates"][];
}

export type LinearRing = {
  0: Position;
  1: Position;
  2: Position;
  3: Position;
} & Position[];

export interface Polygon extends GeometryBase {
  type: "Polygon";
  coordinates: LinearRing[];
}

export interface MultiPolygon extends GeometryBase {
  type: "MultiPolygon";
  coordinates: Polygon["coordinates"][];
}

export interface GeometryCollection {
  type: "GeometryCollection";
  geometries: Geometry[];
}

export interface CustomProperties {
  path?: string;
  distance?: string;
  time?: string;
  altitude?: string;
}

// GeoJSON types

export interface Feature {
  type: "Feature";
  id: string;
  geometry: Geometry | null;
  properties: Record | null;
}

export interface FeatureCollection {
  type: "FeatureCollection";
  features: Feature[];
}

export interface ClusterFeature {
  type: "Feature";
  id: string;
  geometry: Geometry;
  properties: {
    point_count?: number;
    cluster: boolean;
  } & Mark;
}
