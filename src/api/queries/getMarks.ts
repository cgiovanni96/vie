import { useQuery } from "react-query";

import { supabase } from "@vie/api";
import { Mark } from "@vie/modules/Map/types";

export const useGetMarks = () => {
  return useQuery("GET_MARKS", async (): Promise<Mark[] | null> => {
    try {
      const response = await supabase
        .from<Mark>("Marks")
        .select(
          "name, position(latitude, longitude), type (name, group(name))"
        );
      return response.data;
    } catch {
      throw new Error("Marks error");
    }
  });
};
