import create from "zustand";
import { Mark } from "@vie/modules/Map/types";

type MarksStore = {
  marks: Mark[];
  setMarks: (marks: Mark[]) => void;

  filteredMarks: Mark[];
  filterMarks: (groups: string[]) => void;

  checkedTypes: number[];
  setCheckedTypes: (checked: number) => void;

  setAll: () => void;
  isEmpty: () => boolean;
};

export const useMarksStore = create<MarksStore>((set, get) => ({
  marks: [],
  setMarks: (marks: Mark[]) => set({ marks, filteredMarks: marks }),

  filteredMarks: [],
  filterMarks: (groups: string[]) => {
    const currentMarks = get().marks;

    const filtered = currentMarks.filter((mark) => {
      return groups.includes(mark.type.group.name);
    });

    set({ filteredMarks: filtered });
  },

  checkedTypes: [],
  setCheckedTypes: (checked: number) => {
    const currentIndex = get().checkedTypes.indexOf(checked);
    const newChecked = [...get().checkedTypes];

    if (currentIndex === -1) {
      newChecked.push(checked);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    set({ checkedTypes: newChecked });
  },

  setAll: () => set({ filteredMarks: get().marks }),
  isEmpty: () => get().marks.length === 0,
}));
