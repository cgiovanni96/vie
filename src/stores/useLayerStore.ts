import { Feature } from "geojson";
import create from "zustand";

export type LayerStore = {
  hoveredLayer?: string;
  clickedLayer?: string;
  selectedFeature?: Feature;

  setHoveredLayer: (hoveredLayer?: string) => void;
  setClickedLayer: (clickedLayer?: string) => void;
  setSelectedFeature: (selectedFeature?: Feature) => void;
};

export const useLayerStore = create<LayerStore>((set) => ({
  hoveredLayer: undefined,
  clickedLayer: undefined,
  selectedFeature: undefined,

  setHoveredLayer: (hoveredLayer?: string) => set({ hoveredLayer }),
  setClickedLayer: (clickedLayer?: string) => set({ clickedLayer }),
  setSelectedFeature: (selectedFeature?: Feature) => set({ selectedFeature }),
}));
