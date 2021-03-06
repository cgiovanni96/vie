import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Languages
import eng from "./eng.json";
import it from "./it.json";

import { hikesIT, hikesENG } from "./hikes";

const resources = {
  it: { translation: { ...it, ...hikesIT } },
  eng: { translation: { ...eng, ...hikesENG } },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "it",

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
