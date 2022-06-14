import { FeaturePath } from "@vie/types/geojson";
import create from "zustand";

export type LayerStore = {
  hoveredLayer?: string;
  clickedLayer?: string;
  selectedFeature?: FeaturePath;

  setHoveredLayer: (hoveredLayer?: string) => void;
  setClickedLayer: (clickedLayer?: string) => void;
  setSelectedFeature: (selectedFeature?: FeaturePath) => void;
};

export const useLayerStore = create<LayerStore>((set) => ({
  hoveredLayer: undefined,
  clickedLayer: undefined,
  selectedFeature: undefined,

  setHoveredLayer: (hoveredLayer?: string) => set({ hoveredLayer }),
  setClickedLayer: (clickedLayer?: string) => set({ clickedLayer }),
  setSelectedFeature: (selectedFeature?: FeaturePath) =>
    set({ selectedFeature }),
}));
