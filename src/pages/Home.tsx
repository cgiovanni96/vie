import { Button } from "@mui/material";
import { useTranslation } from "react-i18next";

import { Navigation } from "@vie/modules/Map/Navigation";
export const HomePage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Navigation />
      <Button variant="contained">{t("name")}</Button>
    </>
  );
};
