import { supabase } from "./../index";
import { useQuery } from "react-query";
import { Mark } from "../../modules/Map/types";

export const useGetMarks = () => {
  return useQuery("GET_MARKS", async (): Promise<Mark[] | null> => {
    try {
      const response = await supabase
        .from<Mark>("Marks")
        .select(
          "name, position(latitude, longitude), text (it, eng), type (name)"
        );
      return response.data;
    } catch {
      throw new Error("Marks error");
    }
  });
};
