import { useQuery } from "react-query";

import { supabase } from "@vie/api";
import { Type } from "@vie/modules/Map/types";

export const useGetTypes = () => {
  return useQuery("GET_TYPES", async (): Promise<Type[] | null> => {
    try {
      const response = await supabase
        .from<Type>("MarkType")
        .select("name, text(it, eng), group(name, text(it, eng), order)");
      return response.data;
    } catch {
      throw new Error("Types error");
    }
  });
};
