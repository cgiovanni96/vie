import { useEffect } from "react";

type UseScroll = {
  fn: () => void;
};

export const useScroll = ({ fn }: UseScroll) => {
  useEffect(() => {
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);
};
