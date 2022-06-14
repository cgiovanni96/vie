import { useQuery } from "react-query";

import { supabase } from "@vie/api";
import { Path } from "@vie/modules/Map/types";

type PathArguments = {
  path?: string;
};

export const useGetPath = ({ path }: PathArguments) => {
  return useQuery(
    "GET_PATH_" + path,
    async (): Promise<Path | null> => {
      if (!path) return null;
      try {
        const { data, error } = await supabase
          .from<Path>("Paths")
          .select("name, duration, height, altitude, title")

          .eq("name", path);
        if (error) throw new Error("Path error");
        return data[0];
      } catch {
        throw new Error("Path error");
      }
    },
    { enabled: !!path }
  );
};
