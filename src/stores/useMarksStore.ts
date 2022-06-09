import create from "zustand";
import { Mark } from "@vie/modules/Map/types";

type MarksStore = {
  marks: Mark[];
  setMarks: (marks: Mark[]) => void;

  filteredMarks: Mark[];
  filterMarks: (groups: string[]) => void;

  isEmpty: () => boolean;
};

export const useMarksStore = create<MarksStore>((set, get) => ({
  marks: [],
  setMarks: (marks: Mark[]) => set({ marks, filteredMarks: marks }),

  filteredMarks: [],
  filterMarks: (groups: string[]) => {
    const currentMarks = get().marks;

    const filtered = currentMarks.filter((mark) =>
      groups.includes(mark.type.group.name)
    );

    set({ filteredMarks: filtered });
  },

  isEmpty: () => get().marks.length === 0,
}));
