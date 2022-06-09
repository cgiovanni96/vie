import { useQuery } from "react-query";

import { supabase } from "@vie/api";
import { Group } from "@vie/modules/Map/types";

export const useGetGroupTypes = () => {
  return useQuery("GET_GROUP_TYPES", async (): Promise<Group[] | null> => {
    try {
      const response = await supabase
        .from<Group>("MarkTypeGroup")
        .select("name, text(it, eng), order");
      return response.data;
    } catch {
      throw new Error("Types error");
    }
  });
};
