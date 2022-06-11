import { useLanguageStore } from "@vie/stores/useLanguageStore";
import { Text } from "./types";
import { getText } from "./utils";

type Props = {
  text: Text;
};

export const TextSwitcher = ({ text }: Props) => {
  const { language } = useLanguageStore();

  return <>{getText(text, language)}</>;
};
