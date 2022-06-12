// const { data, error } = await supabase.storage.from('avatars').download('public/avatar1.png')

import { useQuery } from "react-query";

import { supabase } from "@vie/api";

type ImageArguments = {
  bucket: "marks";
  path?: string;
};

export const useGetImage = ({ bucket, path }: ImageArguments) => {
  return useQuery(
    "GET_IMAGE_" + path,
    async (): Promise<Blob | null> => {
      if (path === undefined) return null;

      try {
        const { data, error } = await supabase.storage
          .from(bucket)
          .download(path);
        if (error) throw new Error("Image error");
        return data;
      } catch {
        throw new Error("Image error");
      }
    },
    { enabled: !!path }
  );
};
